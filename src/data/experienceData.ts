export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  tags: string[];
}

export interface ExperienceRole {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface PersonalInterest {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
}

export const journeyTimeline: TimelineMilestone[] = [
  {
    year: '2024',
    title: 'Foundations & Academic Genesis',
    subtitle: 'Started B.Tech in Computer Science & Engineering',
    description: 'Enrolled at the Academy of Technology. Immersed in foundational computing: C programming, data structures, discrete mathematics, and fundamental principles of software architecture.',
    status: 'completed',
    tags: ['C Programming', 'Data Structures', 'Linux', 'Academic Honors']
  },
  {
    year: '2025',
    title: 'The Dual Intersection: Code × Design',
    subtitle: 'Exploring programming, graphic design, and community activities',
    description: 'Began weaving together engineering and visual communication. Dove deep into React, TypeScript, and modern UI systems while creating experimental Swiss posters and taking an active leadership role in tech student clubs.',
    status: 'completed',
    tags: ['React', 'TypeScript', 'Figma', 'Poster Design', 'GDG Campus']
  },
  {
    year: '2026',
    title: 'Maturity, Leadership & Real-World Building',
    subtitle: 'Building digital experiences, refining technical skills & leading community initiatives',
    description: 'Developing high-impact web applications, architecting developer tools like Structo, organizing large-scale developer workshops with GDG On Campus, and crafting art-directed digital identities.',
    status: 'in-progress',
    tags: ['Full-Stack Engineering', 'Design Systems', 'Open Source', 'Community Leadership']
  },
  {
    year: '2028',
    title: 'B.Tech Graduation & Future Horizons',
    subtitle: 'Expected graduation year — Academy of Technology',
    description: 'Completing the undergraduate degree in Computer Science and Engineering, equipped with a comprehensive dual skillset bridging creative direction, systems engineering, and innovative product thinking.',
    status: 'upcoming',
    tags: ['Graduation', 'B.Tech CSE', 'Industry Impact', 'Innovation']
  }
];

export const experienceAndLeadership: ExperienceRole[] = [
  {
    role: 'Creative & Technical Lead',
    organization: 'GDG On Campus (Google Developer Groups)',
    period: '2025 — Present',
    location: 'West Bengal, India',
    type: 'Community Leadership',
    description: 'Leading creative direction, brand identity, and technical speaker workshops for an active student developer ecosystem of over 500 members.',
    achievements: [
      'Art-directed and standardized brand visual collateral across digital social channels and campus event physical banners',
      'Mentored 100+ junior students in modern web fundamentals (JavaScript, React, Tailwind CSS)',
      'Spearheaded promotional design and registration logistics for the flagship annual hackathon'
    ],
    skills: ['Community Organizing', 'Creative Direction', 'Public Speaking', 'React', 'Figma']
  },
  {
    role: 'Independent Designer & Software Developer',
    organization: 'Self-Directed / Freelance',
    period: '2024 — Present',
    location: 'India',
    type: 'Creative Practice',
    description: 'Collaborating with early-stage founders, student startups, and open-source communities to build responsive websites, distinct brand identities, and custom digital tools.',
    achievements: [
      'Delivered end-to-end web applications and high-fidelity prototypes for client initiatives',
      'Created custom poster prints, typography experiments, and digital illustrations exhibited on creative forums',
      'Maintained 100% on-time project delivery with focus on pixel precision and performance'
    ],
    skills: ['UI/UX Design', 'Full-Stack Development', 'Brand Strategy', 'Performance Optimization']
  },
  {
    role: 'Core Member & Event Coordinator',
    organization: 'Campus Technical & Cultural Fest Committee',
    period: '2024 — 2025',
    location: 'Academy of Technology',
    type: 'Campus Leadership',
    description: 'Coordinated event staging, design assets, and attendee onboarding for inter-college competitive coding contests and design challenges.',
    achievements: [
      'Managed live registration desk and schedule dispatch for over 1,200 attendees',
      'Designed print badges, certificates, and trophy collateral in compliance with institution branding'
    ],
    skills: ['Event Planning', 'Operations', 'Print Production', 'Team Collaboration']
  }
];

export const educationDetails = {
  institution: 'Academy of Technology',
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Computer Science and Engineering',
  period: '2024 — 2028',
  location: 'West Bengal, India',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++ / Java)',
    'Computer Organization & Architecture',
    'Discrete Mathematics & Graph Theory',
    'Database Management Systems',
    'Operating Systems & Shell Scripting',
    'Web Engineering & Software Design'
  ],
  highlights: [
    'Active participant in coding hackathons and departmental exhibitions',
    'Maintained strong academic standing across foundational engineering curricula',
    'Bridged technical course assignments with modern visual documentation standards'
  ]
};

export const personalInterests: PersonalInterest[] = [
  {
    title: 'Travel & Cartography',
    subtitle: 'Exploring highways and mountain terrains',
    description: 'Drawn to road trips, winding passes, and the quiet beauty of uncharted routes. This passion directly inspired the RayOfRoads navigation platform.',
    tag: 'EXPLORATION',
    iconName: 'Compass'
  },
  {
    title: 'Content & Visual Media',
    subtitle: 'Curating stories through photography & film',
    description: 'Experimenting with framing, color temperature, and micro-documentaries capturing street life, architecture, and technology culture.',
    tag: 'CREATIVE',
    iconName: 'Camera'
  },
  {
    title: 'Cars & Motorcycle Engineering',
    subtitle: 'Mechanical rhythm and industrial design',
    description: 'Deep appreciation for aerodynamic curves, combustion acoustics, and the precision engineering of performance vehicles.',
    tag: 'MACHINERY',
    iconName: 'Gauge'
  },
  {
    title: 'Cinema & Speculative Fiction',
    subtitle: 'Editorial storytelling and cinematic world-building',
    description: 'Captivated by films with strong art direction (Blade Runner 2049, Interstellar, Wes Anderson palettes) and high-concept sci-fi narratives.',
    tag: 'INSPIRATION',
    iconName: 'Film'
  },
  {
    title: 'Emerging Technology',
    subtitle: 'AI agents, spatial interfaces & creative tooling',
    description: 'Constantly tracking generative models, autonomous code agents, micro-hardware, and new paradigms in human-computer interaction.',
    tag: 'INNOVATION',
    iconName: 'Cpu'
  }
];

