const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

// 5x7 bitmap font for crisp offline text rendering in pure PNG
const FONT = {
  ' ': [0, 0, 0, 0, 0],
  'A': [0x7E, 0x11, 0x11, 0x11, 0x7E],
  'B': [0x7F, 0x49, 0x49, 0x49, 0x36],
  'C': [0x3E, 0x41, 0x41, 0x41, 0x22],
  'D': [0x7F, 0x41, 0x41, 0x22, 0x1C],
  'E': [0x7F, 0x49, 0x49, 0x49, 0x41],
  'F': [0x7F, 0x09, 0x09, 0x09, 0x01],
  'G': [0x3E, 0x41, 0x49, 0x49, 0x7A],
  'H': [0x7F, 0x08, 0x08, 0x08, 0x7F],
  'I': [0x00, 0x41, 0x7F, 0x41, 0x00],
  'J': [0x20, 0x40, 0x41, 0x3F, 0x01],
  'K': [0x7F, 0x08, 0x14, 0x22, 0x41],
  'L': [0x7F, 0x40, 0x40, 0x40, 0x40],
  'M': [0x7F, 0x02, 0x0C, 0x02, 0x7F],
  'N': [0x7F, 0x04, 0x08, 0x10, 0x7F],
  'O': [0x3E, 0x41, 0x41, 0x41, 0x3E],
  'P': [0x7F, 0x09, 0x09, 0x09, 0x06],
  'Q': [0x3E, 0x41, 0x51, 0x21, 0x5E],
  'R': [0x7F, 0x09, 0x19, 0x29, 0x46],
  'S': [0x46, 0x49, 0x49, 0x49, 0x31],
  'T': [0x01, 0x01, 0x7F, 0x01, 0x01],
  'U': [0x3F, 0x40, 0x40, 0x40, 0x3F],
  'V': [0x1F, 0x20, 0x40, 0x20, 0x1F],
  'W': [0x7F, 0x20, 0x18, 0x20, 0x7F],
  'X': [0x63, 0x14, 0x08, 0x14, 0x63],
  'Y': [0x07, 0x08, 0x70, 0x08, 0x07],
  'Z': [0x61, 0x51, 0x49, 0x45, 0x43],
  '0': [0x3E, 0x51, 0x49, 0x45, 0x3E],
  '1': [0x00, 0x42, 0x7F, 0x40, 0x00],
  '2': [0x42, 0x61, 0x51, 0x49, 0x46],
  '3': [0x21, 0x41, 0x45, 0x4B, 0x31],
  '4': [0x18, 0x14, 0x12, 0x7F, 0x10],
  '5': [0x27, 0x45, 0x45, 0x45, 0x39],
  '6': [0x3C, 0x4A, 0x49, 0x49, 0x30],
  '7': [0x01, 0x71, 0x09, 0x05, 0x03],
  '8': [0x36, 0x49, 0x49, 0x49, 0x36],
  '9': [0x06, 0x49, 0x49, 0x29, 0x1E],
  '.': [0x00, 0x60, 0x60, 0x00, 0x00],
  '-': [0x08, 0x08, 0x08, 0x08, 0x08],
  '/': [0x20, 0x10, 0x08, 0x04, 0x02],
  ':': [0x00, 0x36, 0x36, 0x00, 0x00],
  '#': [0x14, 0x7F, 0x14, 0x7F, 0x14]
};

class Canvas {
  constructor(width, height, defaultColor) {
    this.width = width;
    this.height = height;
    this.buffer = Buffer.alloc(width * height * 4);
    this.clear(defaultColor);
  }

  clear([r, g, b, a = 255]) {
    for (let i = 0; i < this.width * this.height; i++) {
      this.buffer[i * 4] = r;
      this.buffer[i * 4 + 1] = g;
      this.buffer[i * 4 + 2] = b;
      this.buffer[i * 4 + 3] = a;
    }
  }

  setPixel(x, y, [r, g, b, a = 255]) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
    const idx = (y * this.width + x) * 4;
    if (a === 255) {
      this.buffer[idx] = r;
      this.buffer[idx + 1] = g;
      this.buffer[idx + 2] = b;
      this.buffer[idx + 3] = 255;
    } else {
      const alpha = a / 255;
      const invAlpha = 1 - alpha;
      this.buffer[idx] = Math.round(r * alpha + this.buffer[idx] * invAlpha);
      this.buffer[idx + 1] = Math.round(g * alpha + this.buffer[idx + 1] * invAlpha);
      this.buffer[idx + 2] = Math.round(b * alpha + this.buffer[idx + 2] * invAlpha);
      this.buffer[idx + 3] = 255;
    }
  }

  fillRect(x0, y0, w, h, color) {
    for (let y = y0; y < y0 + h; y++) {
      for (let x = x0; x < x0 + w; x++) {
        this.setPixel(x, y, color);
      }
    }
  }

  strokeRect(x0, y0, w, h, color, lineWidth = 1) {
    for (let t = 0; t < lineWidth; t++) {
      for (let x = x0 + t; x < x0 + w - t; x++) {
        this.setPixel(x, y0 + t, color);
        this.setPixel(x, y0 + h - 1 - t, color);
      }
      for (let y = y0 + t; y < y0 + h - t; y++) {
        this.setPixel(x0 + t, y, color);
        this.setPixel(x0 + w - 1 - t, y, color);
      }
    }
  }

  fillCircle(cx, cy, radius, color) {
    const r2 = radius * radius;
    for (let y = -radius; y <= radius; y++) {
      for (let x = -radius; x <= radius; x++) {
        if (x * x + y * y <= r2) {
          this.setPixel(cx + x, cy + y, color);
        }
      }
    }
  }

  strokeCircle(cx, cy, radius, color, lineWidth = 2) {
    const rInner2 = (radius - lineWidth) * (radius - lineWidth);
    const rOuter2 = radius * radius;
    for (let y = -radius; y <= radius; y++) {
      for (let x = -radius; x <= radius; x++) {
        const d2 = x * x + y * y;
        if (d2 <= rOuter2 && d2 >= rInner2) {
          this.setPixel(cx + x, cy + y, color);
        }
      }
    }
  }

  drawText(text, startX, startY, color, scale = 3) {
    let cursorX = startX;
    const upper = text.toUpperCase();
    for (let i = 0; i < upper.length; i++) {
      const char = upper[i];
      if (char === '\n') {
        startY += 9 * scale;
        cursorX = startX;
        continue;
      }
      const bitmap = FONT[char] || FONT[' '];
      for (let col = 0; col < 5; col++) {
        const bits = bitmap[col];
        for (let row = 0; row < 7; row++) {
          if ((bits >> row) & 1) {
            for (let dy = 0; dy < scale; dy++) {
              for (let dx = 0; dx < scale; dx++) {
                this.setPixel(cursorX + col * scale + dx, startY + row * scale + dy, color);
              }
            }
          }
        }
      }
      cursorX += 6 * scale;
    }
  }

  toPNG() {
    const rowSize = this.width * 4 + 1;
    const rawData = Buffer.alloc(rowSize * this.height);
    for (let y = 0; y < this.height; y++) {
      const rowOffset = y * rowSize;
      rawData[rowOffset] = 0; // Filter: None
      this.buffer.copy(rawData, rowOffset + 1, y * this.width * 4, (y + 1) * this.width * 4);
    }
    const compressed = zlib.deflateSync(rawData);
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    function chunk(type, data) {
      const len = Buffer.alloc(4);
      len.writeUInt32BE(data.length, 0);
      const t = Buffer.from(type, 'ascii');
      const crc = zlib.crc32(Buffer.concat([t, data]));
      const crcBuf = Buffer.alloc(4);
      crcBuf.writeUInt32BE(crc >>> 0, 0);
      return Buffer.concat([len, t, data, crcBuf]);
    }

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(this.width, 0);
    ihdr.writeUInt32BE(this.height, 4);
    ihdr[8] = 8;
    ihdr[9] = 6;
    ihdr[10] = 0;
    ihdr[11] = 0;
    ihdr[12] = 0;

    return Buffer.concat([
      signature,
      chunk('IHDR', ihdr),
      chunk('IDAT', compressed),
      chunk('IEND', Buffer.alloc(0))
    ]);
  }
}

// Brand Colors
const WARM_CREAM = [250, 243, 225]; // #FAF3E1
const OATMEAL = [245, 231, 198];    // #F5E7C6
const ORANGE = [255, 109, 31];      // #FF6D1F
const DARK = [34, 34, 34];          // #222222

const CARDS = [
  {
    path: 'public/posters/poster-lab.png',
    bg: WARM_CREAM,
    draw: (c) => {
      // Grid lines
      for (let x = 60; x < 600; x += 60) c.fillRect(x, 0, 1, 800, [34, 34, 34, 40]);
      for (let y = 80; y < 800; y += 80) c.fillRect(0, y, 600, 1, [34, 34, 34, 40]);
      // Big Orange block
      c.fillRect(360, 60, 200, 200, ORANGE);
      c.fillCircle(460, 160, 65, WARM_CREAM);
      c.fillRect(435, 135, 50, 50, DARK);
      // Typography
      c.drawText('SWISS 12C', 50, 60, ORANGE, 2);
      c.drawText('ENTROPY', 50, 100, DARK, 6);
      c.drawText('IN GRID', 50, 155, ORANGE, 6);
      c.fillRect(50, 230, 260, 6, DARK);
      c.drawText('DECONSTRUCTING BASELINE PROPORTIONS', 50, 250, DARK, 2);
      // Poster block
      c.fillRect(50, 320, 230, 360, OATMEAL);
      c.strokeRect(50, 320, 230, 360, DARK, 3);
      c.drawText('POSTER 01/12', 70, 350, DARK, 3);
      c.drawText('70 X 100 CM', 70, 390, ORANGE, 2);
      c.fillCircle(165, 530, 60, ORANGE);
      // Dark block
      c.fillRect(310, 320, 240, 360, DARK);
      c.drawText('AKASH KUNDU', 330, 350, WARM_CREAM, 3);
      c.drawText('SWISS EXHIBITION', 330, 390, ORANGE, 2);
      c.fillRect(330, 420, 200, 2, [250, 243, 225, 80]);
      c.drawText('ORDER PRODUCES CLARITY', 330, 450, WARM_CREAM, 2);
      c.drawText('RUPTURE PRODUCES MEMORY', 330, 480, WARM_CREAM, 2);
      // Footer
      c.strokeRect(30, 30, 540, 740, DARK, 3);
      c.fillRect(50, 720, 500, 2, DARK);
      c.drawText('AK. VISUAL DISCIPLINE 01 - 2026', 50, 735, DARK, 2);
    }
  },
  {
    path: 'public/branding/aether-brand.png',
    bg: DARK,
    draw: (c) => {
      // Grid lines
      for (let x = 60; x < 600; x += 60) c.fillRect(x, 0, 1, 800, [250, 243, 225, 30]);
      for (let y = 80; y < 800; y += 80) c.fillRect(0, y, 600, 1, [250, 243, 225, 30]);
      // Concentric circles
      c.strokeCircle(300, 380, 180, [250, 243, 225, 50], 2);
      c.strokeCircle(300, 380, 130, ORANGE, 3);
      c.strokeCircle(300, 380, 80, [245, 231, 198, 80], 2);
      c.fillRect(250, 330, 100, 100, WARM_CREAM);
      c.drawText('AE', 265, 345, DARK, 8);
      // Header
      c.drawText('AETHER STUDIO', 50, 60, ORANGE, 2);
      c.drawText('ARCHITECTURE', 50, 100, WARM_CREAM, 5);
      c.drawText('OF THOUGHT', 50, 150, ORANGE, 5);
      // Badges
      c.fillRect(50, 620, 150, 40, ORANGE);
      c.drawText('TANGERINE', 65, 632, WARM_CREAM, 2);
      c.fillRect(220, 620, 150, 40, OATMEAL);
      c.drawText('OATMEAL', 245, 632, DARK, 2);
      c.fillRect(390, 620, 150, 40, WARM_CREAM);
      c.drawText('CANVAS', 425, 632, DARK, 2);
      c.strokeRect(30, 30, 540, 740, [250, 243, 225, 60], 2);
      c.drawText('IDENTITY SYSTEM - 80 PAGE SPECIFICATION', 50, 735, WARM_CREAM, 2);
    }
  },
  {
    path: 'public/illustrations/neo-kolkata.png',
    bg: OATMEAL,
    draw: (c) => {
      // Giant Sun
      c.fillCircle(400, 320, 160, ORANGE);
      // Trusses
      for (let x = 60; x <= 540; x += 80) {
        c.fillRect(x, 260, 4, 260, DARK);
      }
      c.fillRect(50, 260, 500, 6, DARK);
      c.fillRect(50, 520, 500, 8, DARK);
      // Tram silhouette
      c.fillRect(180, 440, 240, 70, DARK);
      for (let wx = 200; wx < 390; wx += 45) {
        c.fillRect(wx, 455, 30, 25, WARM_CREAM);
      }
      c.fillCircle(190, 485, 6, ORANGE);
      // Text
      c.drawText('HERITAGE SERIES', 50, 60, ORANGE, 2);
      c.drawText('NEO-KOLKATA', 50, 100, DARK, 5);
      c.drawText('TRANSIT MEMORY', 50, 150, ORANGE, 4);
      c.fillRect(0, 580, 600, 220, DARK);
      c.drawText('CANTILEVERED HORIZONS', 50, 630, WARM_CREAM, 3);
      c.drawText('ELECTRIC TRAMWAY NO. 04', 50, 670, ORANGE, 2);
      c.drawText('HOWRAH STRUCTURAL MATRIX', 50, 700, [250, 243, 225, 180], 2);
      c.strokeRect(30, 30, 540, 740, DARK, 3);
    }
  },
  {
    path: 'public/ui/nexus-ds.png',
    bg: DARK,
    draw: (c) => {
      // IDE Top bar
      c.fillRect(50, 60, 500, 35, [250, 243, 225, 40]);
      c.fillCircle(75, 77, 6, ORANGE);
      c.fillCircle(95, 77, 6, OATMEAL);
      c.fillCircle(115, 77, 6, WARM_CREAM);
      c.drawText('NEXUS DESIGN SYSTEM V2.4', 140, 72, WARM_CREAM, 2);
      // Title
      c.drawText('DESIGN TOKENS', 50, 130, WARM_CREAM, 5);
      c.drawText('140+ UI MODULES', 50, 180, ORANGE, 4);
      // Button cards
      c.fillRect(50, 260, 230, 420, WARM_CREAM);
      c.drawText('UI COMPONENTS', 70, 290, ORANGE, 2);
      c.fillRect(70, 330, 190, 45, ORANGE);
      c.drawText('PRIMARY BTN', 95, 345, WARM_CREAM, 2);
      c.fillRect(70, 390, 190, 45, DARK);
      c.drawText('SECONDARY', 105, 405, WARM_CREAM, 2);
      c.strokeRect(70, 450, 190, 45, DARK, 2);
      c.drawText('OUTLINE GHOST', 85, 465, DARK, 2);
      // Code dock
      c.fillRect(300, 260, 250, 420, OATMEAL);
      c.fillRect(320, 290, 210, 360, DARK);
      c.drawText(':ROOT {', 335, 320, ORANGE, 2);
      c.drawText('--BG: #FAF3E1;', 335, 350, WARM_CREAM, 2);
      c.drawText('--ACCENT: #FF6D1F;', 335, 380, ORANGE, 2);
      c.drawText('--DARK: #222222;', 335, 410, WARM_CREAM, 2);
      c.drawText('--RADIUS: 8PX;', 335, 440, [250, 243, 225, 160], 2);
      c.drawText('}', 335, 470, ORANGE, 2);
      c.strokeRect(30, 30, 540, 740, [250, 243, 225, 50], 2);
      c.drawText('ACCESSIBILITY WCAG AAA CERTIFIED', 50, 735, WARM_CREAM, 2);
    }
  },
  {
    path: 'public/branding/gdg-campus.png',
    bg: WARM_CREAM,
    draw: (c) => {
      c.fillRect(50, 50, 500, 700, DARK);
      c.drawText('COMMUNITY BRANDING', 80, 80, ORANGE, 2);
      c.drawText('GDG ON CAMPUS', 80, 120, WARM_CREAM, 5);
      c.drawText('TECH VISUAL DIR', 80, 170, ORANGE, 4);
      // Badge Pass
      c.fillRect(80, 260, 200, 340, WARM_CREAM);
      c.fillRect(80, 260, 200, 60, ORANGE);
      c.fillRect(150, 275, 60, 10, DARK); // hole
      c.drawText('SPEAKER PASS', 105, 350, DARK, 2);
      c.drawText('DEVCON 2025', 115, 380, ORANGE, 2);
      c.fillCircle(180, 470, 40, OATMEAL);
      c.drawText('AK', 165, 455, DARK, 4);
      c.drawText('LEAD ORGANIZER', 95, 550, DARK, 2);
      // Keynote slide
      c.fillRect(300, 260, 220, 340, OATMEAL);
      c.fillRect(315, 280, 190, 290, DARK);
      c.drawText('BUILDING FOR', 330, 310, WARM_CREAM, 2);
      c.drawText('BILLIONS', 330, 335, ORANGE, 3);
      c.fillRect(330, 380, 160, 140, [250, 243, 225, 20]);
      c.drawText('$ GIT CLONE', 340, 400, WARM_CREAM, 2);
      c.drawText('1200+ ATTENDEES', 340, 430, ORANGE, 2);
      c.drawText('12 WORKSHOPS', 340, 460, WARM_CREAM, 2);
      c.strokeRect(30, 30, 540, 740, DARK, 3);
    }
  },
  {
    path: 'public/experiments/monolith.png',
    bg: WARM_CREAM,
    draw: (c) => {
      // Big Orange Circle
      c.fillCircle(250, 400, 180, ORANGE);
      c.fillCircle(300, 360, 120, OATMEAL);
      // Monolith Slab
      c.fillRect(280, 160, 220, 460, DARK);
      c.fillRect(310, 200, 25, 380, ORANGE);
      // Borders & Text
      c.strokeRect(50, 50, 500, 700, DARK, 4);
      c.drawText('MONOLITH PRINT', 70, 80, ORANGE, 2);
      c.drawText('EQUILIBRIUM', 70, 120, DARK, 5);
      c.drawText('PLANAR BALANCE', 70, 170, ORANGE, 3);
      c.drawText('RISOGRAPH EDITION 01/25', 70, 680, DARK, 2);
      c.drawText('SOY CARBON INK ON MUNKEN 300GSM', 70, 710, ORANGE, 2);
    }
  },
  {
    path: 'public/posters/swiss-grid-74.png',
    bg: WARM_CREAM,
    draw: (c) => {
      // Grid lines
      for (let x = 60; x < 600; x += 60) c.fillRect(x, 0, 1, 800, [34, 34, 34, 40]);
      c.fillRect(240, 180, 260, 260, DARK);
      c.fillRect(320, 260, 180, 180, ORANGE);
      c.fillCircle(320, 260, 60, WARM_CREAM);
      c.drawText('SWISS', 70, 120, DARK, 6);
      c.drawText('GRID 74', 70, 180, ORANGE, 6);
      c.drawText('BASELINE MATRIX STUDY', 70, 240, DARK, 2);
      c.strokeRect(30, 30, 540, 740, DARK, 3);
      c.drawText('JOSEF MULLER-BROCKMANN TRIBUTE', 70, 720, DARK, 2);
    }
  },
  {
    path: 'public/branding/solaris-spatial.png',
    bg: DARK,
    draw: (c) => {
      // Spatial Rings
      c.strokeCircle(300, 400, 180, [250, 243, 225, 60], 2);
      c.strokeCircle(300, 400, 130, ORANGE, 3);
      c.fillCircle(300, 400, 50, ORANGE);
      c.fillCircle(300, 400, 25, WARM_CREAM);
      c.drawText('SPATIAL UI LAB', 70, 80, ORANGE, 2);
      c.drawText('SOLARIS 3D', 70, 120, WARM_CREAM, 6);
      c.drawText('VOLUMETRIC UX', 70, 180, ORANGE, 4);
      c.strokeRect(30, 30, 540, 740, [250, 243, 225, 60], 2);
      c.drawText('120 FPS FOV RENDERING ENGINE', 70, 720, WARM_CREAM, 2);
    }
  },
  {
    path: 'public/experiments/analog-glitch.png',
    bg: WARM_CREAM,
    draw: (c) => {
      // Scanlines
      for (let y = 60; y < 740; y += 12) c.fillRect(50, y, 500, 2, [34, 34, 34, 30]);
      c.fillRect(100, 220, 400, 100, DARK);
      c.fillRect(120, 200, 380, 30, ORANGE);
      c.fillRect(80, 350, 440, 70, OATMEAL);
      c.fillRect(140, 450, 340, 120, DARK);
      c.fillRect(180, 480, 140, 60, ORANGE);
      c.drawText('ANALOG', 120, 245, WARM_CREAM, 6);
      c.drawText('DISRUPT', 170, 495, WARM_CREAM, 4);
      c.strokeRect(30, 30, 540, 740, DARK, 3);
      c.drawText('CRT CATHODE SCANLINES - 525 LINES', 70, 720, DARK, 2);
    }
  },
  {
    path: 'public/posters/bauhaus-form.png',
    bg: OATMEAL,
    draw: (c) => {
      // Circle, Triangle, Square
      c.fillCircle(200, 380, 90, ORANGE);
      c.fillRect(320, 290, 180, 180, DARK);
      c.strokeRect(340, 310, 140, 140, WARM_CREAM, 4);
      c.drawText('BAUHAUS 2026', 70, 80, DARK, 5);
      c.drawText('PRIMARY FORMS', 70, 135, ORANGE, 3);
      c.drawText('CIRCLE . SQUARE . TRIANGLE', 70, 170, DARK, 2);
      c.strokeRect(30, 30, 540, 740, DARK, 3);
      c.drawText('FORM FOLLOWS INTENTION - KANDINSKY', 70, 720, DARK, 2);
    }
  }
];

CARDS.forEach(card => {
  const canvas = new Canvas(600, 800, card.bg);
  card.draw(canvas);
  const pngBuffer = canvas.toPNG();
  fs.writeFileSync(card.path, pngBuffer);
  console.log('Generated:', card.path, 'Size:', pngBuffer.length);
});
