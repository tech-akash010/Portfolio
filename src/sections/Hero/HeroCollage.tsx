import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import {
  ArrowUpRight,
  Terminal,
  Palette,
  Cpu,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Grid,
  Clock,
  MapPin,
  Send,
  Layers,
  RotateCw,
} from 'lucide-react';

interface TerminalLog {
  id: string;
  type: 'command' | 'output' | 'system';
  text: string;
}

const FEATURED_ARTWORKS = [
  {
    title: 'The Art of Not Giving a S**t',
    year: '2025',
    category: 'Editorial Poster',
    url: 'https://github.com/tech-akash010/portfolio-assets/blob/main/ART%20of%20not%20giving%20SHIT.png?raw=true',
  },
  {
    title: 'BMW M Motorsport Poster',
    year: '2025',
    category: 'Vector Graphics',
    url: 'https://github.com/tech-akash010/portfolio-assets/blob/main/BMW%20poster.png?raw=true',
  },
  {
    title: 'Algo Identity System',
    year: '2025',
    category: 'Brand Architecture',
    url: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Algo%20final.png?raw=true',
  },
  {
    title: 'Lewis 4.0 Brand Kit',
    year: '2025',
    category: 'Event Collateral',
    url: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Lewis%204.0.png?raw=true',
  },
  {
    title: 'Overthink Typography',
    year: '2025',
    category: 'Optical Tension',
    url: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Overthink.png?raw=true',
  },
];

const TAGLINES = [
  'a mind in motion',
  'code meets typography',
  'algorithmic precision',
  'crafting digital futures',
];

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  // Mode: 'terminal' | 'canvas' | 'radar'
  const [activeMode, setActiveMode] = useState<'terminal' | 'canvas' | 'radar'>('terminal');

  // Tagline cycle index
  const [taglineIdx, setTaglineIdx] = useState(0);

  // Live IST Clock
  const [timeString, setTimeString] = useState('');

  // 3D Tilt State for workstation card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const workstationRef = useRef<HTMLDivElement>(null);

  // Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { id: '1', type: 'system', text: 'AK_WORKSPACE // KINETIC RUNTIME v2.4.0' },
    { id: '2', type: 'system', text: 'Type a command or click a quick action below:' },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Canvas Artwork State
  const [currentArtworkIdx, setCurrentArtworkIdx] = useState(0);
  const [showSwissGrid, setShowSwissGrid] = useState(false);

  // Architecture Radar Subsystem
  const [activeNode, setActiveNode] = useState<'core' | 'ast' | 'ui' | 'api'>('core');

  // Live Kolkata Time updates every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of terminal when logs change
  useEffect(() => {
    if (activeMode === 'terminal') {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs, activeMode]);

  // Handle Confetti Spark
  const fireSparkConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#FF6D1F', '#FAF3E1', '#F5E7C6', '#222222'],
      disableForReducedMotion: true,
    });
  };

  // Card Mouse Move for 3D Perspective Tilt
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!workstationRef.current) return;
    const rect = workstationRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // max 5deg
    const rotateY = ((x - centerX) / centerX) * 5; // max 5deg
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Terminal Execution
  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: TerminalLog[] = [
      ...terminalLogs,
      { id: String(Date.now()), type: 'command', text: `$ ${cmd}` },
    ];

    switch (trimmed) {
      case 'help':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: 'Available commands: whoami, stack, projects, status, coffee, clear',
        });
        break;
      case 'whoami':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: 'Akash Kundu (AK) — Computer Science Engineering student, Full-Stack Developer & Visual Designer based in India.',
        });
        break;
      case 'stack':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: 'TypeScript, React 19, Next.js, Node.js, WebGL, Tailwind CSS, Figma, Adobe Illustrator, Glyphs',
        });
        break;
      case 'projects':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: '• OpenLearn Hub (Interactive CS curriculum)\n• Structo (AST Cyclic Dependency Analyzer)\n• Sankalp (Emergency Blood Dispatch System)\n• RayOfRoads (Elevation Cartography)\n• Kinetic Type Poster Lab (Swiss Silkscreen Series)',
        });
        break;
      case 'status':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: '● Open for Q1–Q2 2026 engineering & design collaborations. Direct: contact@akashkundu.dev',
        });
        break;
      case 'coffee':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: '☕ Pouring artisan dark roast... +100% computational throughput unlocked!',
        });
        break;
      case 'clear':
        setTerminalLogs([
          { id: String(Date.now()), type: 'system', text: 'Terminal console buffer cleared.' },
        ]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `zsh: command not found: ${trimmed}. Try clicking a quick command below or type 'help'.`,
        });
        break;
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center pt-32 sm:pt-36 pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Top Live Status & Telemetry Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#222222]/15 text-xs font-mono">
        {/* Left: Location & Live Time */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#222222]/80">
            <MapPin className="w-3.5 h-3.5 text-[#FF6D1F]" />
            <span className="font-bold">KOLKATA, IN</span>
            <span className="text-[#222222]/50 text-[10px]">22.57°N 88.36°E</span>
          </div>

          <span className="text-[#222222]/30">•</span>

          <div className="flex items-center gap-1.5 text-[#222222]/80">
            <Clock className="w-3.5 h-3.5 text-[#222222]" />
            <span>{timeString || '12:00:00 PM IST'}</span>
          </div>
        </div>

        {/* Right: Availability Status & Creative Spark Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5E7C6] border border-[#222222]/15 text-[#222222] text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#FF6D1F] animate-pulse" />
            <span className="font-bold uppercase tracking-wider">AVAILABLE 2026</span>
          </div>

          <button
            type="button"
            onClick={fireSparkConfetti}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222222] text-[#FAF3E1] hover:bg-[#FF6D1F] transition-colors text-[11px] uppercase tracking-wider shadow-xs"
            title="Click for a creative spark!"
          >
            <Sparkles className="w-3 h-3 text-[#FF6D1F] group-hover:text-[#FAF3E1] transition-colors" />
            <span className="hidden sm:inline">IGNITE SPARK</span>
          </button>
        </div>
      </div>

      {/* Main Studio Canvas Grid */}
      <div className="relative z-10 my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Oversized Kinetic Headlines & Bio */}
        <div className="lg:col-span-6 space-y-6">
          {/* Staggered Giant Headlines */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                THINK<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden flex flex-wrap items-baseline gap-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                CREATE<span className="text-[#FF6D1F]">.</span>
              </motion.h1>

              {/* Interactive Tagline Shuffler Pill */}
              <button
                type="button"
                onClick={() => setTaglineIdx((prev) => (prev + 1) % TAGLINES.length)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5E7C6] border border-[#222222]/15 font-editorial italic text-base sm:text-xl text-[#222222] hover:border-[#FF6D1F] hover:bg-[#FAF3E1] transition-all cursor-pointer"
                title="Click to cycle creative manifesto"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={TAGLINES[taglineIdx]}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {TAGLINES[taglineIdx]}
                  </motion.span>
                </AnimatePresence>
                <RotateCw className="w-3 h-3 text-[#FF6D1F] group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                BUILD<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
            </div>
          </div>

          {/* Supporting Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-base sm:text-lg text-[#222222]/85 max-w-xl leading-relaxed"
          >
            I'm <strong className="text-[#222222] font-semibold">Akash Kundu (AK)</strong>, an engineering student, software developer, and graphic designer based in India. I engineer high-performance digital systems and architect art-directed identities.
          </motion.p>

          {/* Quick Action Navigation CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              to="/projects"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#222222]/25 text-[#222222] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#FF6D1F] hover:text-[#FF6D1F] transition-colors"
            >
              <span>Studio Dossier</span>
            </Link>

            {/* Quick Mode Toggle Shortcuts */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F5E7C6] border border-[#222222]/15 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveMode('terminal')}
                className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
                  activeMode === 'terminal'
                    ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                    : 'text-[#222222]/70 hover:text-[#222222]'
                }`}
                title="Open Interactive Terminal"
              >
                &gt; Code
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('canvas')}
                className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
                  activeMode === 'canvas'
                    ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                    : 'text-[#222222]/70 hover:text-[#222222]'
                }`}
                title="Open Swiss Design Canvas"
              >
                &gt; Art
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('radar')}
                className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
                  activeMode === 'radar'
                    ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                    : 'text-[#222222]/70 hover:text-[#222222]'
                }`}
                title="Inspect System Radar"
              >
                &gt; Specs
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Creative Engineering Workstation */}
        <div className="lg:col-span-6 relative w-full flex flex-col justify-center">
          <motion.div
            ref={workstationRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-[#222222] text-[#FAF3E1] rounded-2xl border border-[#222222] overflow-hidden shadow-2xl shadow-[#222222]/20"
          >
            {/* Top Workstation Chrome Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#FAF3E1]/15 bg-[#222222]">
              {/* Traffic light dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF6D1F]" />
                <span className="w-3 h-3 rounded-full bg-[#F5E7C6]" />
                <span className="w-3 h-3 rounded-full bg-[#FAF3E1]/40" />
                <span className="font-mono text-xs text-[#FAF3E1]/60 ml-2 hidden sm:inline">
                  ak-studio // {activeMode.toUpperCase()}
                </span>
              </div>

              {/* Mode Selector Tabs */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveMode('terminal')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeMode === 'terminal'
                      ? 'bg-[#FAF3E1]/15 text-[#FF6D1F] font-bold'
                      : 'text-[#FAF3E1]/60 hover:text-[#FAF3E1]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">TERMINAL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode('canvas')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeMode === 'canvas'
                      ? 'bg-[#FAF3E1]/15 text-[#FF6D1F] font-bold'
                      : 'text-[#FAF3E1]/60 hover:text-[#FAF3E1]'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">CANVAS</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode('radar')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    activeMode === 'radar'
                      ? 'bg-[#FAF3E1]/15 text-[#FF6D1F] font-bold'
                      : 'text-[#FAF3E1]/60 hover:text-[#FAF3E1]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">RADAR</span>
                </button>
              </div>
            </div>

            {/* Workstation Screen Stage */}
            <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
              {/* MODE 1: TERMINAL */}
              {activeMode === 'terminal' && (
                <div className="flex flex-col justify-between h-full space-y-4">
                  {/* Terminal Output Logs */}
                  <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 max-h-52 overflow-y-auto pr-2 scrollbar-none">
                    {terminalLogs.map((log) => (
                      <div
                        key={log.id}
                        className={
                          log.type === 'command'
                            ? 'text-[#FF6D1F] font-bold'
                            : log.type === 'system'
                            ? 'text-[#FAF3E1]/50 text-[11px]'
                            : 'text-[#FAF3E1]/85 whitespace-pre-line'
                        }
                      >
                        {log.text}
                      </div>
                    ))}
                    <div ref={terminalBottomRef} />
                  </div>

                  {/* Interactive Command Input Form */}
                  <form onSubmit={handleTerminalSubmit} className="relative mt-2">
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF3E1]/5 border border-[#FAF3E1]/20 rounded-lg">
                      <span className="font-mono text-[#FF6D1F] font-bold">&gt;</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="type 'whoami', 'stack', 'projects', 'status'..."
                        className="bg-transparent font-mono text-xs text-[#FAF3E1] placeholder-[#FAF3E1]/30 focus:outline-none w-full"
                      />
                      <button
                        type="submit"
                        className="p-1 rounded text-[#FAF3E1]/60 hover:text-[#FF6D1F] transition-colors"
                        title="Execute command"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>

                  {/* Quick Command Pills */}
                  <div className="pt-2 border-t border-[#FAF3E1]/10 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                    <span className="text-[#FAF3E1]/40 uppercase mr-1">TRY:</span>
                    {['whoami', 'stack', 'projects', 'status', 'coffee', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        type="button"
                        onClick={() => executeCommand(cmd)}
                        className="px-2 py-0.5 rounded bg-[#FAF3E1]/10 text-[#FAF3E1]/80 hover:bg-[#FF6D1F] hover:text-[#FAF3E1] transition-colors"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MODE 2: CANVAS (SWISS DESIGN BOARD) */}
              {activeMode === 'canvas' && (
                <div className="flex flex-col justify-between h-full space-y-4">
                  {/* Artwork Showcase Frame */}
                  <div className="relative w-full h-56 bg-[#F5E7C6] rounded-xl overflow-hidden border border-[#FAF3E1]/15 p-3 flex items-center justify-center group">
                    {/* Modular Swiss Grid Overlay (Togglable) */}
                    {showSwissGrid && (
                      <div className="absolute inset-0 z-20 pointer-events-none grid grid-cols-6 grid-rows-4 divide-x divide-y divide-[#FF6D1F]/30 bg-[#FF6D1F]/5">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="relative">
                            <span className="absolute top-0.5 left-0.5 font-mono text-[8px] text-[#FF6D1F]/50">
                              +{i + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Active Artwork Image */}
                    <img
                      src={FEATURED_ARTWORKS[currentArtworkIdx].url}
                      alt={FEATURED_ARTWORKS[currentArtworkIdx].title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('github.com') && target.src.includes('/blob/')) {
                          target.src = target.src
                            .replace('github.com', 'raw.githubusercontent.com')
                            .replace('/blob/', '/');
                        }
                      }}
                      className="w-full h-full object-contain drop-shadow-md select-none transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Artwork Caption Tag */}
                    <div className="absolute bottom-2 left-2 z-30 px-2.5 py-1 rounded bg-[#222222]/90 backdrop-blur-xs text-[#FAF3E1] font-mono text-[10px] flex items-center gap-2">
                      <span className="text-[#FF6D1F] font-bold">
                        0{currentArtworkIdx + 1} / 0{FEATURED_ARTWORKS.length}
                      </span>
                      <span>{FEATURED_ARTWORKS[currentArtworkIdx].title}</span>
                    </div>
                  </div>

                  {/* Artwork Interactive Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#FAF3E1]/10 font-mono text-xs">
                    {/* Stepping controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentArtworkIdx((prev) =>
                            prev === 0 ? FEATURED_ARTWORKS.length - 1 : prev - 1
                          )
                        }
                        className="p-1.5 rounded-full bg-[#FAF3E1]/10 hover:bg-[#FF6D1F] transition-colors"
                        title="Previous Artwork"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#FAF3E1]" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentArtworkIdx((prev) => (prev + 1) % FEATURED_ARTWORKS.length)
                        }
                        className="p-1.5 rounded-full bg-[#FAF3E1]/10 hover:bg-[#FF6D1F] transition-colors"
                        title="Next Artwork"
                      >
                        <ChevronRight className="w-4 h-4 text-[#FAF3E1]" />
                      </button>
                    </div>

                    {/* Swiss Grid Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowSwissGrid(!showSwissGrid)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase transition-colors ${
                        showSwissGrid
                          ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                          : 'bg-[#FAF3E1]/10 text-[#FAF3E1]/70 hover:text-[#FAF3E1]'
                      }`}
                    >
                      <Grid className="w-3.5 h-3.5" />
                      <span>{showSwissGrid ? 'GRID: ON' : 'GRID: OFF'}</span>
                    </button>

                    {/* Direct Link to Design Folio */}
                    <Link
                      to="/projects/design"
                      className="text-[#FF6D1F] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Full Folio</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}

              {/* MODE 3: SYSTEM RADAR / DAG */}
              {activeMode === 'radar' && (
                <div className="flex flex-col justify-between h-full space-y-4">
                  {/* Interactive DAG Radar Canvas */}
                  <div className="relative w-full h-56 bg-[#222222] rounded-xl overflow-hidden border border-[#FAF3E1]/15 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 260 140" className="w-full h-full select-none">
                      {/* Grid rings */}
                      <circle cx="130" cy="70" r="55" stroke="#FAF3E1" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                      <circle cx="130" cy="70" r="30" stroke="#FF6D1F" strokeWidth="0.8" opacity="0.3" />

                      {/* Connection lines */}
                      <line x1="130" y1="70" x2="60" y2="40" stroke={activeNode === 'ast' ? '#FF6D1F' : '#FAF3E1'} strokeWidth={activeNode === 'ast' ? 2 : 1} opacity="0.6" />
                      <line x1="130" y1="70" x2="200" y2="40" stroke={activeNode === 'ui' ? '#FF6D1F' : '#FAF3E1'} strokeWidth={activeNode === 'ui' ? 2 : 1} opacity="0.6" />
                      <line x1="130" y1="70" x2="130" y2="120" stroke={activeNode === 'api' ? '#FF6D1F' : '#FAF3E1'} strokeWidth={activeNode === 'api' ? 2 : 1} opacity="0.6" />

                      {/* Central Core Node */}
                      <circle
                        cx="130"
                        cy="70"
                        r="12"
                        fill={activeNode === 'core' ? '#FF6D1F' : '#FAF3E1'}
                        className="cursor-pointer transition-colors"
                        onClick={() => setActiveNode('core')}
                      />
                      <text x="130" y="74" textAnchor="middle" fill="#222222" fontSize="7" fontFamily="monospace" fontWeight="bold">
                        AK
                      </text>

                      {/* Subsystem 1: AST ENGINE */}
                      <circle
                        cx="60"
                        cy="40"
                        r="9"
                        fill={activeNode === 'ast' ? '#FF6D1F' : '#F5E7C6'}
                        className="cursor-pointer transition-colors"
                        onClick={() => setActiveNode('ast')}
                      />
                      <text x="60" y="24" textAnchor="middle" fill="#FAF3E1" fontSize="7" fontFamily="monospace">
                        AST_DAG
                      </text>

                      {/* Subsystem 2: UI TOKENS */}
                      <circle
                        cx="200"
                        cy="40"
                        r="9"
                        fill={activeNode === 'ui' ? '#FF6D1F' : '#F5E7C6'}
                        className="cursor-pointer transition-colors"
                        onClick={() => setActiveNode('ui')}
                      />
                      <text x="200" y="24" textAnchor="middle" fill="#FAF3E1" fontSize="7" fontFamily="monospace">
                        UI_DESIGN
                      </text>

                      {/* Subsystem 3: API RUNTIME */}
                      <circle
                        cx="130"
                        cy="120"
                        r="9"
                        fill={activeNode === 'api' ? '#FF6D1F' : '#F5E7C6'}
                        className="cursor-pointer transition-colors"
                        onClick={() => setActiveNode('api')}
                      />
                      <text x="130" y="135" textAnchor="middle" fill="#FAF3E1" fontSize="7" fontFamily="monospace">
                        RUNTIME
                      </text>
                    </svg>

                    {/* Node Info Banner */}
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-[#FAF3E1]/10 text-[#FAF3E1] font-mono text-[9px] uppercase">
                      ACTIVE: <span className="text-[#FF6D1F] font-bold">{activeNode}</span>
                    </div>
                  </div>

                  {/* Node Diagnostics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#FAF3E1]/10 font-mono text-[10px]">
                    <div className="p-2 rounded bg-[#FAF3E1]/5 border border-[#FAF3E1]/10">
                      <span className="text-[#FAF3E1]/40 block uppercase">THROUGHPUT</span>
                      <span className="text-[#FF6D1F] font-bold text-xs">60 FPS</span>
                    </div>
                    <div className="p-2 rounded bg-[#FAF3E1]/5 border border-[#FAF3E1]/10">
                      <span className="text-[#FAF3E1]/40 block uppercase">LATENCY</span>
                      <span className="text-[#FAF3E1] font-bold text-xs">0.18ms</span>
                    </div>
                    <div className="p-2 rounded bg-[#FAF3E1]/5 border border-[#FAF3E1]/10">
                      <span className="text-[#FAF3E1]/40 block uppercase">TEST COVERAGE</span>
                      <span className="text-[#FAF3E1] font-bold text-xs">99.4%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Workstation System Footer */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#FAF3E1]/5 border-t border-[#FAF3E1]/10 font-mono text-[10px] text-[#FAF3E1]/50">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D1F]" />
                <span>ARCH: HYBRID / CLIENT-FIRST</span>
              </div>
              <span className="text-[#FF6D1F]">AKASH KUNDU // 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
