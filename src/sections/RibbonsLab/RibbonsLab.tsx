import React, { useState } from 'react';
import Ribbons, { RibbonShape } from '../../components/Ribbons';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { Sparkles, Sliders, RefreshCw, Copy, Check, Eye } from 'lucide-react';

export const RibbonsLab: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  // Settings matching user's requested defaults
  const [shape, setShape] = useState<RibbonShape>('lens');
  const [wave, setWave] = useState<number>(0);
  const [thickness, setThickness] = useState<number>(36);
  const [length, setLength] = useState<number>(2.4);
  const [spread, setSpread] = useState<number>(18);
  const [stiffness, setStiffness] = useState<number>(0.5);
  const [bounce, setBounce] = useState<number>(0.5);
  const [softness, setSoftness] = useState<number>(0.8);
  const [opacity, setOpacity] = useState<number>(1);
  const [fade, setFade] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const colors = ['#ff6d1f', '#f5e7c6', '#222222'];

  const resetToDefaults = () => {
    setShape('lens');
    setWave(0);
    setThickness(36);
    setLength(2.4);
    setSpread(18);
    setStiffness(0.5);
    setBounce(0.5);
    setSoftness(0.8);
    setOpacity(1);
    setFade(true);
  };

  const codeSnippet = `<div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
  <Ribbons
    colors={["#ff6d1f", "#f5e7c6", "#222222"]}
    thickness={${thickness}}
    length={${length}}
    shape="${shape}"
    spread={${spread}}
    stiffness={${stiffness}}
    bounce={${bounce}}
    wave={${wave}}
    softness={${softness}}
    opacity={${opacity}}
    fade={${fade}}
  />
</div>`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#222222]/15">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222222]/15 pb-6 mb-10 gap-4">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase block mb-1">
            LABORATORY // EXPERIMENTAL WEBGL
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#222222]">
            KINETIC RIBBONS<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#222222]/70 max-w-sm leading-relaxed">
          Springy physics ribbons that trail the cursor in lens, comet, or even profiles with real-time sinusoidal wave dynamics.
        </p>
      </div>

      {/* Main Interactive Canvas Stage */}
      <div className="relative rounded-lg border border-[#222222]/20 bg-[#FAF3E1] overflow-hidden shadow-xl">
        {/* Top Stage Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#222222]/15 bg-[#F5E7C6]/60 select-none">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#222222]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6D1F]" />
            <span className="font-bold">LIVE STAGE // HOVER &amp; MOVE POINTER</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px]">
            <span className="text-[#222222]/60 hidden sm:inline">SHAPE: {shape.toUpperCase()}</span>
            <span className="text-[#FF6D1F] font-bold">WAVE: {wave > 0 ? wave : 'OFF'}</span>
          </div>
        </div>

        {/* The 500px Container requested by User */}
        <div
          style={{ height: '500px', position: 'relative', overflow: 'hidden' }}
          className="cursor-crosshair select-none"
        >
          {/* Subtle Grid Lines inside canvas */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(34, 34, 34, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 34, 34, 0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Central Callout Message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6D1F] font-bold">
              MOVE CURSOR ACROSS THIS CANVAS
            </span>
            <p className="font-editorial italic text-2xl sm:text-3xl text-[#222222]/70 mt-1 max-w-md">
              "A Mind in Motion"
            </p>
            <span className="font-mono text-[10px] text-[#222222]/40 mt-2">
              Spring-mass-damper simulation @ 120Hz
            </span>
          </div>

          {/* WebGL Ribbons Instance */}
          <Ribbons
            colors={colors}
            thickness={thickness}
            length={length}
            shape={shape}
            spread={spread}
            stiffness={stiffness}
            bounce={bounce}
            wave={wave}
            softness={softness}
            opacity={opacity}
            fade={fade}
          />
        </div>
      </div>

      {/* Interactive Control Console Dock */}
      <div className="mt-8 p-6 bg-[#F5E7C6]/70 border border-[#222222]/15 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Column 1: Shape & Wave Controls */}
        <div className="lg:col-span-4 space-y-5">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#222222] uppercase tracking-wider mb-2.5">
              <Sliders className="w-3.5 h-3.5 text-[#FF6D1F]" />
              <span>RIBBON PROFILE SHAPE</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['lens', 'comet', 'even'] as RibbonShape[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShape(s)}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                  className={`px-3 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                    shape === s
                      ? 'bg-[#222222] text-[#FAF3E1] border-[#222222] font-bold shadow-xs'
                      : 'bg-[#FAF3E1] text-[#222222] border-[#222222]/20 hover:border-[#FF6D1F]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center font-mono text-xs text-[#222222] uppercase tracking-wider mb-2">
              <span>WAVE AMPLITUDE</span>
              <span className="text-[#FF6D1F] font-bold">{wave}</span>
            </div>
            <div className="flex gap-2">
              {[0, 0.3, 0.6, 0.9].map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWave(w)}
                  className={`flex-1 py-1.5 rounded font-mono text-xs transition-colors border ${
                    wave === w
                      ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold border-[#FF6D1F]'
                      : 'bg-[#FAF3E1] text-[#222222] border-[#222222]/20 hover:border-[#FF6D1F]'
                  }`}
                >
                  {w === 0 ? 'OFF' : `${w}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[#222222]/60 uppercase tracking-widest block mb-2">
              ACTIVE PALETTE
            </span>
            <div className="flex items-center gap-3">
              {colors.map((c) => (
                <div key={c} className="flex items-center gap-1.5 font-mono text-[10px] text-[#222222]">
                  <span
                    className="w-4 h-4 rounded border border-[#222222]/30"
                    style={{ backgroundColor: c }}
                  />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Physics Sliders */}
        <div className="lg:col-span-4 space-y-4 font-mono text-xs">
          <div>
            <div className="flex justify-between text-[#222222] mb-1">
              <span>THICKNESS ({thickness}px)</span>
              <span className="text-[#222222]/50">36 default</span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              step="2"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="w-full accent-[#FF6D1F] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[#222222] mb-1">
              <span>LENGTH ({length})</span>
              <span className="text-[#222222]/50">2.4 default</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="4.5"
              step="0.1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-[#FF6D1F] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[#222222] mb-1">
              <span>STIFFNESS ({stiffness})</span>
              <span className="text-[#222222]/50">0.5 default</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={stiffness}
              onChange={(e) => setStiffness(Number(e.target.value))}
              className="w-full accent-[#FF6D1F] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[#222222] mb-1">
              <span>BOUNCE ({bounce})</span>
              <span className="text-[#222222]/50">0.5 default</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={bounce}
              onChange={(e) => setBounce(Number(e.target.value))}
              className="w-full accent-[#FF6D1F] cursor-pointer"
            />
          </div>
        </div>

        {/* Column 3: Live Code Snippet & Reset */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#222222]/70 uppercase">
            <span>REACT IMPLEMENTATION</span>
            <button
              onClick={copyCode}
              className="flex items-center gap-1 text-[#FF6D1F] hover:underline"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <pre className="p-3.5 bg-[#222222] text-[#FAF3E1] rounded text-[10px] font-mono leading-relaxed overflow-x-auto border border-[#222222]">
            <code>{codeSnippet}</code>
          </pre>

          <button
            type="button"
            onClick={resetToDefaults}
            className="w-full py-2 bg-[#FAF3E1] border border-[#222222]/20 rounded font-mono text-xs uppercase text-[#222222] hover:border-[#FF6D1F] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 text-[#FF6D1F]" />
            <span>Reset to Configured Defaults</span>
          </button>
        </div>
      </div>
    </section>
  );
};
