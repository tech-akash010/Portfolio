import { DesignProject, TechProject, Project } from '../types/project';

export const designProjects: DesignProject[] = [
  {
    id: 'des-01',
    slug: 'kinetic-type-poster-lab',
    number: '01',
    title: 'Kinetic Type & Poster Lab',
    year: '2025',
    category: 'design',
    subcategory: 'Event Posters',
    tagline: 'Experimental typography and Swiss poster explorations',
    description: 'A series of bold editorial posters blending mid-century Swiss graphic design principles with brutalist typography, dynamic grids, and high-contrast color theory.',
    coverImage: '/posters/poster-lab.svg',
    featured: true,
    featuredOrder: 2,
    brief: 'To explore how classic International Typographic Style can be reinterpreted using contemporary digital constraints, variable typefaces, and hyper-structured geometric grid systems.',
    objectives: [
      'Deconstruct traditional 12-column Swiss grids into asymmetrical focal planes',
      'Experiment with oversized glyphs, tight tracking, and optical scale hierarchy',
      'Create high-impact promotional collateral for experimental campus technology conferences',
      'Establish a strict four-hue color restriction model without losing visual energy'
    ],
    researchAndInspiration: 'Inspired by the geometric rigor of Josef Müller-Brockmann, Wim Crouwel’s experimental grid systems, and contemporary Japanese editorial typography. The visual language balances mathematical discipline with raw human expression.',
    creativeDirection: {
      concept: 'Rhythm, Tension & Pure Geometry',
      typography: ['Space Grotesk (700)', 'Space Mono (400)', 'Inter (500)'],
      colorPalette: [
        { name: 'Warm Canvas', hex: '#FAF3E1' },
        { name: 'Paper Beige', hex: '#F5E7C6' },
        { name: 'Pure Ink', hex: '#222222' },
        { name: 'Signal Orange', hex: '#FF6D1F' }
      ],
      visualElements: ['Asymmetrical coordinates', '45° sheared text blocks', 'Micro-perforations', 'Overprinted halftone patterns']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Mathematical Grid Mapping',
        description: 'Established a strict baseline grid and 6x6 modular matrix on canvas, experimenting with modular divisions and optical balance.'
      },
      {
        phase: 'Phase 02',
        title: 'Typographic Tension',
        description: 'Pushed font scales to extreme contrasts—pairing 120pt bold headlines directly beside 8pt technical metadata.'
      },
      {
        phase: 'Phase 03',
        title: 'Texture & Print Simulation',
        description: 'Applied subtle analog noise and ink-bleed effects to counteract the digital sterility and give tactile warmth.'
      }
    ],
    finalOutcome: 'A recognized portfolio of 12 printed and digital posters featured in student exhibitions, campus tech conferences, and design community spotlights.',
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Canva Pro', 'Glyphs'],
    gallery: [
      {
        caption: 'Poster 01: "Entropy in Grid" — 70x100cm Silk Screen Print Preview',
        type: 'poster',
        aspectRatio: '3/4'
      },
      {
        caption: 'Poster 02: "Signals from the Void" — Kinetic Type Exhibition Collateral',
        type: 'poster',
        aspectRatio: '3/4'
      },
      {
        caption: 'Modular Typographic Hierarchy & Scale Study',
        type: 'editorial',
        aspectRatio: '16/9'
      }
    ]
  },
  {
    id: 'des-02',
    slug: 'aether-identity-system',
    number: '02',
    title: 'Aether Identity System',
    year: '2025',
    category: 'design',
    subcategory: 'Branding and Identity',
    tagline: 'Comprehensive visual identity for a generative media studio',
    description: 'An architectural brand identity system designed around dynamic generative modules, tactile paper textures, and responsive logomarks that adapt to screen coordinates.',
    coverImage: '/branding/aether-brand.svg',
    featured: false,
    brief: 'Develop an unconventional brand identity for Aether—a creative studio operating at the nexus of generative AI, algorithmic music, and physical installation design.',
    objectives: [
      'Create a logo mark that breathes and reacts to real-time audio amplitude',
      'Produce a comprehensive 80-page brand guidelines specification book',
      'Design sustainable physical merchandise, stationery, and architectural signage',
      'Implement an accessible yet striking color application framework'
    ],
    researchAndInspiration: 'Researched early cybernetics branding from the 1970s (Olivetti, Braun, MIT Media Lab) and paired it with modern digital minimalism to evoke enduring technical elegance.',
    creativeDirection: {
      concept: 'The Architecture of Thought',
      typography: ['Space Grotesk', 'Playfair Display', 'Space Mono'],
      colorPalette: [
        { name: 'Canvas White', hex: '#FAF3E1' },
        { name: 'Deep Carbon', hex: '#222222' },
        { name: 'Electric Tangerine', hex: '#FF6D1F' },
        { name: 'Oatmeal Tone', hex: '#F5E7C6' }
      ],
      visualElements: ['Variable line-weight logos', 'Embossed blind letterpress', 'Monochrome technical callouts']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Brand Archetype & Spatial Audit',
        description: 'Analyzed competitor landscapes in the computational design space and formulated the "Architectural Oracle" persona.'
      },
      {
        phase: 'Phase 02',
        title: 'Generative Mark Iteration',
        description: 'Generated over 200 vector iterations combining Greek mathematical glyphs with optical scanline motifs.'
      },
      {
        phase: 'Phase 03',
        title: 'Guidelines & Design System',
        description: 'Compiled component libraries, vector assets, stationery mockups, and digital layout rules into a strict brand bible.'
      }
    ],
    finalOutcome: 'A complete identity kit deployed across digital web properties, physical exhibition passes, and studio merchandise.',
    toolsUsed: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
    gallery: [
      {
        caption: 'Brand Architecture & Monogram Construction Grid',
        type: 'branding',
        aspectRatio: '16/9'
      },
      {
        caption: 'Stationery Suite: Letterheads, Business Cards & Blind Deboss Envelope',
        type: 'branding',
        aspectRatio: '4/3'
      }
    ]
  },
  {
    id: 'des-03',
    slug: 'neo-kolkata-illustrated',
    number: '03',
    title: 'Neo-Kolkata Illustrated',
    year: '2025',
    category: 'design',
    subcategory: 'Illustrations',
    tagline: 'Cyber-heritage vector series capturing architecture and transit',
    description: 'A speculative visual storytelling series exploring historic heritage trams, hand-pulled rickshaws, and British colonial arches reimagined in a neo-futuristic solar-punk world.',
    coverImage: '/illustrations/neo-kolkata.svg',
    featured: false,
    brief: 'A personal creative exploration celebrating the rich urban texture of Kolkata through an expressive, isometric, and vector-driven lens.',
    objectives: [
      'Document classic architectural motifs (Howrah Bridge, Victoria Memorial, College Street) in a speculative future setting',
      'Harmonize warm sun-baked parchment tones with vibrant industrial orange accents',
      'Create an isometric asset library for interactive digital maps'
    ],
    researchAndInspiration: 'Blended traditional Bengali Kalighat paintings, Japanese woodblock prints, and cyberpunk architectural sketches.',
    creativeDirection: {
      concept: 'Memory Meets Speculation',
      typography: ['Playfair Display', 'Space Mono'],
      colorPalette: [
        { name: 'Parchment', hex: '#FAF3E1' },
        { name: 'Amber Clay', hex: '#F5E7C6' },
        { name: 'Tram Iron', hex: '#222222' },
        { name: 'Sunrise Flame', hex: '#FF6D1F' }
      ],
      visualElements: ['Isometric projection lines', 'Stipple grain textures', 'Monoline architectural outlines']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Field Photography & Sketching',
        description: 'Captured over 400 reference photographs of trams, street corners, and colonial ironwork.'
      },
      {
        phase: 'Phase 02',
        title: 'Monoline Vector Geometry',
        description: 'Traced and stylized urban silhouettes into precise geometric vector assets.'
      },
      {
        phase: 'Phase 03',
        title: 'Color Grading & Grain Layering',
        description: 'Layered tonal paper textures and high-intensity orange lighting accents.'
      }
    ],
    finalOutcome: 'An 8-piece digital illustration collection released as high-res digital art prints and featured in regional student art fests.',
    toolsUsed: ['Adobe Illustrator', 'Procreate', 'Figma'],
    gallery: [
      {
        caption: 'Plate 01: "The Electric Tram at Midnight"',
        type: 'editorial',
        aspectRatio: '4/3'
      },
      {
        caption: 'Plate 02: "Cantilevered Horizons — Howrah Structural Study"',
        type: 'editorial',
        aspectRatio: '16/9'
      }
    ]
  },
  {
    id: 'des-04',
    slug: 'nexus-design-system',
    number: '04',
    title: 'Nexus Design System',
    year: '2026',
    category: 'design',
    subcategory: 'UI/UX',
    tagline: 'Cross-platform design token architecture for student developers',
    description: 'A modular, high-density UI component library crafted for complex developer dashboards, code editors, and data visualizers with strict WCAG AAA accessibility.',
    coverImage: '/ui/nexus-ds.svg',
    featured: false,
    brief: 'Create a unified design system that solves visual fragmentation across 5 distinct campus engineering tools and student portals.',
    objectives: [
      'Design over 140 accessible UI components across light, warm-paper, and high-contrast dark modes',
      'Establish a mathematically scaled typography token hierarchy using Space Grotesk and Space Mono',
      'Build fully interactive Figma component prototypes with auto-layout and interactive component variants'
    ],
    researchAndInspiration: 'Studied GitHub Primer, Linear’s design language, and JetBrains Fleet interface conventions.',
    creativeDirection: {
      concept: 'Instrumental Precision',
      typography: ['Space Grotesk', 'Inter', 'Space Mono'],
      colorPalette: [
        { name: 'Paper Shell', hex: '#FAF3E1' },
        { name: 'Panel Beige', hex: '#F5E7C6' },
        { name: 'Dark Carbon', hex: '#222222' },
        { name: 'Safety Orange', hex: '#FF6D1F' }
      ],
      visualElements: ['Micro-borders', 'Tabbed code docks', 'High-contrast status pills', 'Subtle hover states']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Component Inventory & Audit',
        description: 'Audited existing student club portals to identify common form controls, navigation patterns, and data tables.'
      },
      {
        phase: 'Phase 02',
        title: 'Design Token Structure',
        description: 'Defined semantic design tokens for spacing, typography, elevation, and interactive states.'
      },
      {
        phase: 'Phase 03',
        title: 'Prototyping & Stress Testing',
        description: 'Tested complex multi-column data views, keyboard navigation paths, and screen reader announcements.'
      }
    ],
    finalOutcome: 'Adopted as the foundational UI system for OpenLearn Hub and community club management tools, reducing design handover time by 60%.',
    toolsUsed: ['Figma', 'Framer', 'Tailwind CSS', 'Storybook'],
    gallery: [
      {
        caption: 'Token System & Component Variant Matrix in Figma',
        type: 'ui',
        aspectRatio: '16/9'
      },
      {
        caption: 'High-Density IDE & Dashboard Layout Prototype',
        type: 'ui',
        aspectRatio: '16/10'
      }
    ]
  },
  {
    id: 'des-05',
    slug: 'gdg-campus-brand-kit',
    number: '05',
    title: 'GDG On Campus Visual Direction',
    year: '2025',
    category: 'design',
    subcategory: 'Social Media Design',
    tagline: 'Brand assets, speaker decks, and social collateral for tech communities',
    description: 'A dynamic visual identity package and social media design system for campus tech events, developer workshops, and hackathons.',
    coverImage: '/branding/gdg-campus.svg',
    featured: false,
    brief: 'Provide cohesive visual identity and promotional collateral for 12+ student developer workshops, speaker sessions, and coding competitions.',
    objectives: [
      'Create 30+ reusable social templates for Instagram, LinkedIn, and X',
      'Design immersive keynote slides for guest technical speakers',
      'Produce physical lanyards, badge passes, and sticker packs with tactile editorial styling'
    ],
    researchAndInspiration: 'Google Material Design 3 guidelines hybridized with contemporary brutalist web posters.',
    creativeDirection: {
      concept: 'Open Community, Unbound Code',
      typography: ['Space Grotesk', 'Inter', 'Space Mono'],
      colorPalette: [
        { name: 'Ivory Base', hex: '#FAF3E1' },
        { name: 'Parchment Card', hex: '#F5E7C6' },
        { name: 'Deep Slate', hex: '#222222' },
        { name: 'Beacon Orange', hex: '#FF6D1F' }
      ],
      visualElements: ['Terminal prompts', 'Halftone portraits', 'Brutalist registration banners']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Audience Strategy',
        description: 'Targeted tech-savvy university students seeking both technical substance and contemporary visual energy.'
      },
      {
        phase: 'Phase 02',
        title: 'Template Modularization',
        description: 'Created auto-layout Figma templates enabling fast 5-minute asset generation for sudden speaker announcements.'
      },
      {
        phase: 'Phase 03',
        title: 'Event Deployment',
        description: 'Coordinated printing, digital projection calibration, and social broadcast timing.'
      }
    ],
    finalOutcome: 'Drove a 140% increase in student event registration and established a recognizable visual signature across the university ecosystem.',
    toolsUsed: ['Figma', 'Canva', 'Photoshop'],
    gallery: [
      {
        caption: 'Social Campaign Grid for Annual Hackathon Announcement',
        type: 'branding',
        aspectRatio: '16/9'
      }
    ]
  },
  {
    id: 'des-06',
    slug: 'abstract-monolith-print',
    number: '06',
    title: 'Abstract Monolith Print Series',
    year: '2026',
    category: 'design',
    subcategory: 'Creative Experiments',
    tagline: 'Generative geometric compositions rendered in ink and paper',
    description: 'An experimental study investigating physical weight, digital grain, and pure geometric balance using custom algorithmic layout rules.',
    coverImage: '/experiments/monolith.svg',
    featured: false,
    brief: 'An independent creative retreat exploring the limits of non-representational form and physical paper interaction.',
    objectives: [
      'Compose visuals using only rectangles, circles, and 45-degree angled rules',
      'Simulate letterpress depth and ink depression digitally',
      'Create a limited-edition risograph print run for personal collectors'
    ],
    researchAndInspiration: 'Constructivism, El Lissitzky, and Malevich’s Suprematist compositions.',
    creativeDirection: {
      concept: 'Monolithic Balance',
      typography: ['Space Mono'],
      colorPalette: [
        { name: 'Heavy Ink', hex: '#222222' },
        { name: 'Warm Cream', hex: '#FAF3E1' },
        { name: 'Burnt Orange', hex: '#FF6D1F' }
      ],
      visualElements: ['Overlapping planar volumes', 'Negative space incisions', 'Fine technical scale metrics']
    },
    designProcess: [
      {
        phase: 'Phase 01',
        title: 'Algorithmic Sketching',
        description: 'Wrote small JavaScript canvas scripts to generate stochastic compositions based on the golden ratio.'
      },
      {
        phase: 'Phase 02',
        title: 'Editorial Curation',
        description: 'Selected the 5 most evocative arrangements and refined vector anchor points by hand.'
      },
      {
        phase: 'Phase 03',
        title: 'Fine Art Print Simulation',
        description: 'Applied paper texture profiles and ink density curves.'
      }
    ],
    finalOutcome: 'Exhibited in digital galleries and showcased on creative design forums.',
    toolsUsed: ['Canvas API', 'Figma', 'Illustrator'],
    gallery: [
      {
        caption: 'Composition IV: "Gravity & Tension in Red and Black"',
        type: 'editorial',
        aspectRatio: '1/1'
      }
    ]
  }
];

export const techProjects: TechProject[] = [
  {
    id: 'tech-01',
    slug: 'openlearn-hub',
    number: '01',
    title: 'OpenLearn Hub',
    year: '2025',
    category: 'technology',
    subcategory: 'Open Source',
    tagline: 'Collaborative peer learning and curriculum exchange platform',
    description: 'An open-source educational ecosystem engineered to help university engineering students share peer-curated syllabi, practice problems, notes, and interactive code sandboxes.',
    coverImage: '/tech/openlearn-hub.svg',
    featured: true,
    featuredOrder: 1,
    problemStatement: 'Computer Science students face scattered learning materials across unsearchable messaging channels, outdated college portals, and fragmented drive folders with zero peer review or interactive code verification.',
    solution: 'Engineered an integrated knowledge platform featuring real-time markdown document editing, course-specific knowledge graphs, interactive C++/Python code runner widgets, and peer reputation systems.',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Vite', 'Monaco Editor'],
    architecture: {
      overview: 'Modular client-server architecture utilizing reactive frontend state with optimistic UI updates and serverless cloud backend synchronization.',
      layers: [
        {
          title: 'Client Interface Layer',
          description: 'Single-page application with responsive Swiss-inspired layout, instant search caching, and Monaco code editor integration.',
          tech: 'React 19, TypeScript, Tailwind CSS'
        },
        {
          title: 'Application & State Layer',
          description: 'Reactive client cache with offline-first local storage fallback and optimistic mutation pipeline.',
          tech: 'Zustand, React Router 7'
        },
        {
          title: 'Cloud & Sandbox Backend',
          description: 'Firebase Authentication, Cloud Firestore real-time listener trees, and isolated code evaluation runtime.',
          tech: 'Firebase Cloud Functions, Node.js runtime'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Interactive Code Walkthroughs',
        description: 'In-browser syntax-highlighted code runner with test-case validation for algorithms and data structures.'
      },
      {
        title: 'Graph Curriculum Visualizer',
        description: 'Dynamic visual dependency map showing which prerequisites unlock advanced semester subjects.'
      },
      {
        title: 'Peer Review & Upvoting',
        description: 'Reputation-weighted voting to elevate highest-quality explanations, cheat sheets, and exam notes.'
      },
      {
        title: 'Offline Reading Mode',
        description: 'Service-worker caching of essential study guides for low-bandwidth campus network conditions.'
      }
    ],
    keyImplementationDetails: [
      'Implemented debounced AST validation for interactive markdown and code snippets',
      'Configured sub-50ms fuzzy full-text search across 500+ syllabus modules using client-side indexing',
      'Built custom responsive code tabs with copy-to-clipboard feedback and memory usage estimates',
      'Structured strict TypeScript interfaces for all user events, question types, and curriculum nodes'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Synchronizing real-time collaborative notes without causing excessive database writes.',
        learning: 'Adopted client-side debouncing combined with differential change patches, cutting cloud transaction costs by 70%.'
      },
      {
        challenge: 'Maintaining accessible tab-stops across complex embedded code editors and interactive diagrams.',
        learning: 'Engineered custom keyboard traps with Escape fallbacks following ARIA authoring practices.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/openlearn-hub',
    liveUrl: 'https://openlearn-hub.vercel.app',
    stats: [
      { label: 'Active Learners', value: '450+' },
      { label: 'Study Modules', value: '120+' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Open Source Stars', value: '80+' }
    ],
    codeSnippet: {
      filename: 'useCodeExecution.ts',
      language: 'typescript',
      code: `export function useCodeExecution(code: string, language: 'cpp' | 'python' | 'js') {
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runCode = async () => {
    setIsRunning(true);
    try {
      const res = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, timestamp: Date.now() })
      });
      const data = await res.json();
      setOutput(data.stdout || data.stderr);
    } catch (err) {
      setOutput('Execution failed. Check your network or syntax.');
    } finally {
      setIsRunning(false);
    }
  };

  return { runCode, output, isRunning };
}`
    }
  },
  {
    id: 'tech-02',
    slug: 'sankalp',
    number: '02',
    title: 'Sankalp',
    year: '2025',
    category: 'technology',
    subcategory: 'Web Applications',
    tagline: 'Community initiative & resource mobilization portal',
    description: 'A community engagement platform designed to connect student volunteers, campus sustainability initiatives, blood donation drives, and local social impact missions.',
    coverImage: '/tech/sankalp.svg',
    featured: true,
    featuredOrder: 3,
    problemStatement: 'Student-led community service initiatives often struggle with disorganized signups, lost contact records, missed donor alerts, and poor transparency in volunteer hour tracking.',
    solution: 'Designed and deployed an intuitive web portal providing volunteer dispatch, real-time emergency need broadcasts (e.g. rare blood group requests), and verified impact certificates.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Vite'],
    architecture: {
      overview: 'Role-based full-stack web application built for high reliability and zero downtime during urgent community appeals.',
      layers: [
        {
          title: 'Frontend Portal',
          description: 'High-contrast mobile-friendly interface built with clean Tailwind utility classes and accessible form elements.',
          tech: 'React 19, Lucide Icons, Tailwind CSS'
        },
        {
          title: 'API Gateway & Services',
          description: 'RESTful API with JWT authentication, rate limiting, and volunteer registration workflows.',
          tech: 'Node.js, Express, Zod schema validation'
        },
        {
          title: 'Data & Notification Store',
          description: 'Document database with indexed geospatial queries for local drive discovery.',
          tech: 'MongoDB Atlas, Webhook push alerts'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Emergency Donor Dispatch',
        description: 'Instant filtering of verified student donors by blood type and campus residence proximity.'
      },
      {
        title: 'Volunteer Milestone Ledger',
        description: 'Tamper-proof digital tracking of hours served, events attended, and community badges earned.'
      },
      {
        title: 'Campaign Media Gallery',
        description: 'Editorial showcase highlighting event photographs, participant testimonials, and transparency reports.'
      }
    ],
    keyImplementationDetails: [
      'Designed responsive donor registration forms with rigorous client-side phone and blood group validation',
      'Configured role-based access control (Admin, Volunteer, Organizer, Visitor)',
      'Optimized load times to under 1.1s on 3G cellular connections for field volunteers'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Ensuring privacy while retaining rapid contact functionality for urgent medical calls.',
        learning: 'Implemented one-time masked call relays and opt-in location radius limits to safeguard student personal numbers.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/sankalp-portal',
    liveUrl: 'https://sankalp-impact.web.app',
    stats: [
      { label: 'Volunteers Registered', value: '300+' },
      { label: 'Drives Conducted', value: '18' },
      { label: 'Response Time', value: '< 15 mins' }
    ]
  },
  {
    id: 'tech-03',
    slug: 'structo',
    number: '03',
    title: 'Structo',
    year: '2026',
    category: 'technology',
    subcategory: 'Developer Tools',
    tagline: 'Visual codebase architecture analyzer and dependency grapher',
    description: 'A developer tool that parses source directories, extracts abstract syntax trees, and renders interactive 2D node graphs visualizing circular dependencies, bundle weight, and file couplings.',
    coverImage: '/tech/structo.svg',
    featured: true,
    featuredOrder: 4,
    problemStatement: 'As software projects grow, mental models of how components and modules interconnect deteriorate, leading to unintentional cyclic imports, hidden bottlenecks, and bloated bundles.',
    solution: 'Built a lightweight CLI and companion web visualizer that scans repositories, builds an in-memory dependency DAG (Directed Acyclic Graph), and renders high-density interactive graph topologies.',
    techStack: ['TypeScript', 'React', 'Canvas API', 'Node.js', 'D3.js Force', 'Vite'],
    architecture: {
      overview: 'Two-part architecture: a high-speed CLI parsing module and an interactive WebGL/Canvas visualization front-end.',
      layers: [
        {
          title: 'Parser Core (CLI)',
          description: 'Babel/TypeScript AST traversal engine that maps import/export specifiers across project files.',
          tech: 'TypeScript, @babel/parser, fast-glob'
        },
        {
          title: 'Graph Engine',
          description: 'Force-directed physics simulation executing on an HTML5 2D Canvas for 60fps interaction at 5,000+ nodes.',
          tech: 'D3 Force Simulation, HTML5 Canvas'
        },
        {
          title: 'Inspection Dashboard',
          description: 'Interactive side-panel detailing cyclomatic complexity, incoming/outgoing edges, and circular loops.',
          tech: 'React 19, Tailwind CSS'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Instant Cycle Detection',
        description: 'Tarjan’s strongly connected components algorithm highlights dangerous circular imports in bright orange.'
      },
      {
        title: 'Bundle Weight Heatmap',
        description: 'Visual node sizing proportional to lines of code and estimated compiled bundle bytes.'
      },
      {
        title: 'Export to SVG / JSON',
        description: 'One-click export of architecture diagrams for technical documentation and pull request reviews.'
      }
    ],
    keyImplementationDetails: [
      'Engineered custom canvas spatial indexing (QuadTree) for instant hover hit-testing of thousands of nodes',
      'Implemented smooth camera pan-and-zoom with inertia and zero frame drops',
      'Created zero-dependency standalone HTML report output bundle'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Canvas render performance dropping during intense physics layout calculations for large codebases.',
        learning: 'Offloaded layout computation to a background Web Worker, keeping the main UI thread completely responsive at 60fps.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/structo-analyzer',
    liveUrl: 'https://structo-graph.vercel.app',
    stats: [
      { label: 'Max Nodes Handled', value: '10k+' },
      { label: 'Render FPS', value: '60 fps' },
      { label: 'Parse Speed', value: '450 files/sec' }
    ]
  },
  {
    id: 'tech-04',
    slug: 'rayofroads',
    number: '04',
    title: 'RayOfRoads',
    year: '2025',
    category: 'technology',
    subcategory: 'Web Applications',
    tagline: 'Interactive travel navigation & scenic roadway intelligence',
    description: 'A modern web platform for driving enthusiasts and road trippers to map, curate, review, and experience scenic highway routes with real-time weather and road-surface metrics.',
    coverImage: '/tech/rayofroads.svg',
    featured: true,
    featuredOrder: 5,
    problemStatement: 'Conventional GPS tools optimize strictly for the shortest commute time, leading travelers through congested bypasses while completely missing breathtaking scenic highways and traveler-friendly rest stops.',
    solution: 'Constructed an exploration-first navigation platform that calculates "Scenic Index" scores based on elevation variance, tree cover, curvature density, and verified road-condition community notes.',
    techStack: ['React', 'TypeScript', 'Mapbox GL / Leaflet', 'Tailwind CSS', 'Open-Meteo API', 'Node.js'],
    architecture: {
      overview: 'Interactive geospatial web app combining tile mapping, elevation profile computation, and dynamic waypoints.',
      layers: [
        {
          title: 'Geospatial Canvas',
          description: 'Vector tile map rendering customized with the signature warm ivory and charcoal styling.',
          tech: 'Mapbox GL JS, GeoJSON'
        },
        {
          title: 'Route Optimizer',
          description: 'Curvature and elevation analysis algorithms that rate routes for scenic value.',
          tech: 'Turf.js, Polyline decoding'
        },
        {
          title: 'Weather & Surface Feed',
          description: 'Live atmospheric weather and road condition integration for route segments.',
          tech: 'Open-Meteo API, Local caching'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Scenic Index Scoring',
        description: 'Algorithmic calculation evaluating mountain elevation gains, hairpin turns, and forested stretches.'
      },
      {
        title: 'Elevation Profile Graph',
        description: 'Interactive SVG cross-section visualizing climbs, descents, and scenic vista points.'
      },
      {
        title: 'Bespoke Cartographic Theme',
        description: 'Custom-designed Swiss map palette matching the portfolio’s ivory (#FAF3E1) and orange (#FF6D1F) accents.'
      }
    ],
    keyImplementationDetails: [
      'Rendered custom GeoJSON layers with gradient stroke coloring based on surface quality',
      'Engineered offline GPX route file export for motorcycle handlebar GPS units',
      'Maintained fluid touch navigation for mobile tablet cockpit mounting'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Handling dense polyline coordinates without crashing browser memory on long 1,000km routes.',
        learning: 'Employed the Douglas-Peucker line simplification algorithm to reduce coordinate points by 80% without visible loss of road fidelity.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/rayofroads',
    liveUrl: 'https://rayofroads.vercel.app',
    stats: [
      { label: 'Scenic Routes Indexed', value: '85+' },
      { label: 'Total Kilometers', value: '24,000+' },
      { label: 'Active Drivers', value: '1.2k' }
    ]
  },
  {
    id: 'tech-05',
    slug: 'synapse-ai-studio',
    number: '05',
    title: 'Synapse AI Studio',
    year: '2026',
    category: 'technology',
    subcategory: 'AI Applications',
    tagline: 'Prompt orchestration & multimodal pipeline playground',
    description: 'A developer environment for prototyping, evaluating, and fine-tuning prompt chains with structured output schema enforcement and latency comparison metrics.',
    coverImage: '/tech/synapse.svg',
    featured: false,
    problemStatement: 'Developers experimenting with LLM APIs lack a visual, reproducible testing harness to compare output accuracy, token consumption, and response drift across multiple model versions.',
    solution: 'Built a multi-model orchestration workbench supporting JSON schema validation, parallel side-by-side prompt diffing, and cost tracking.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Vite', 'Zod'],
    architecture: {
      overview: 'Client-driven LLM playground with local API key encryption and streaming token pipelines.',
      layers: [
        {
          title: 'Pipeline Canvas',
          description: 'Visual chain constructor linking system prompts, contextual memory, and output validators.',
          tech: 'React 19, Motion'
        },
        {
          title: 'Streaming Engine',
          description: 'SSE (Server-Sent Events) and web stream consumer rendering markdown in real-time.',
          tech: 'Fetch Streams API, Markdown parser'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Side-by-Side Model Diff',
        description: 'Simultaneously query models with the same seed prompt to compare reasoning latency and stylistic tone.'
      },
      {
        title: 'Strict JSON Schema Enforcement',
        description: 'Automatic Zod schema validation ensuring responses match required structured application formats.'
      }
    ],
    keyImplementationDetails: [
      'Implemented token counting heuristics and real-time cost estimation ticker',
      'Configured local encrypted storage for developer API credentials'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Parsing streaming JSON tokens that are syntactically incomplete during generation.',
        learning: 'Developed an incremental JSON parser that tolerates unclosed brackets and streaming partials.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/synapse-ai-studio',
    liveUrl: 'https://synapse-studio.vercel.app',
    stats: [
      { label: 'Supported Models', value: '8+' },
      { label: 'Execution Speed', value: 'Real-time' },
      { label: 'Token Accuracy', value: '100%' }
    ]
  },
  {
    id: 'tech-06',
    slug: 'omnigraph-playground',
    number: '06',
    title: 'OmniGraph Playground',
    year: '2025',
    category: 'technology',
    subcategory: 'Developer Tools',
    tagline: 'Interactive graph algorithms and pathfinding visualizer',
    description: 'An educational algorithmic tool demonstrating BFS, DFS, Dijkstra, A*, and Minimum Spanning Trees with step-by-step state playback and custom weighted node drawing.',
    coverImage: '/tech/omnigraph.svg',
    featured: false,
    problemStatement: 'Computer Science students learning graph theory struggle to conceptualize queue states, visited sets, and edge relaxation steps from static textbook diagrams.',
    solution: 'Designed an interactive tactile sandbox where students place vertices, connect weighted bidirectional edges, and scrub through algorithm execution steps at variable speeds.',
    techStack: ['TypeScript', 'React', 'HTML5 Canvas', 'Tailwind CSS'],
    architecture: {
      overview: 'Pure client-side state machine modeling algorithmic step generators with time-travel scrubbing.',
      layers: [
        {
          title: 'Visual Graph Canvas',
          description: 'Smooth vector rendering of nodes, weights, and animated frontier wavefronts.',
          tech: 'HTML5 Canvas API'
        },
        {
          title: 'Algorithm Generator Engine',
          description: 'JavaScript ES6 generator functions yielding snapshot states on each queue pop.',
          tech: 'TypeScript, ES6 Generators'
        }
      ]
    },
    keyFeatures: [
      {
        title: 'Interactive Time Scrubbing',
        description: 'Step forward, backward, or pause search execution to observe exact data structure states.'
      },
      {
        title: 'Maze & Terrain Generators',
        description: 'Generate recursive backtracker mazes and Perlin noise elevation heatmaps with one click.'
      }
    ],
    keyImplementationDetails: [
      'Built a custom undo/redo graph history stack supporting 100+ revision checkpoints',
      'Implemented accessible color-blind friendly node highlighting'
    ],
    challengesAndLearnings: [
      {
        challenge: 'Translating asynchronous step intervals into reversible state transitions.',
        learning: 'Utilized generator functions that yield pure immutable graph snapshots at every decision point.'
      }
    ],
    githubUrl: 'https://github.com/akashkundu/omnigraph',
    liveUrl: 'https://omnigraph.vercel.app',
    stats: [
      { label: 'Algorithms Visualized', value: '7' },
      { label: 'Max Graph Nodes', value: '2,500' },
      { label: 'Step Latency', value: '< 2ms' }
    ]
  }
];

export const allProjects: Project[] = [...designProjects, ...techProjects];

export function getProjectBySlug(category: 'design' | 'technology', slug: string): Project | undefined {
  if (category === 'design') {
    return designProjects.find(p => p.slug === slug);
  }
  return techProjects.find(p => p.slug === slug);
}

export const featuredProjects: Project[] = [
  techProjects.find(p => p.slug === 'openlearn-hub')!,
  techProjects.find(p => p.slug === 'sankalp')!,
  techProjects.find(p => p.slug === 'structo')!,
  techProjects.find(p => p.slug === 'rayofroads')!,
].filter(Boolean);
