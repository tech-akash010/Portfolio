export interface SkillItem {
  name: string;
  level: string; // e.g. "Proficient", "Advanced", "Intermediate"
  description: string;
  category: 'development' | 'design' | 'tools';
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: 'development' | 'design' | 'tools';
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategoryGroup[] = [
  {
    id: 'development',
    title: 'DEVELOPMENT',
    subtitle: 'Software engineering, computational logic, and web systems',
    skills: [
      { name: 'C', level: 'Core', description: 'System fundamentals, pointers, memory allocation, and OS interfaces.', category: 'development' },
      { name: 'C++', level: 'Advanced', description: 'Object-oriented programming, STL containers, competitive algorithms.', category: 'development', highlight: true },
      { name: 'Python', level: 'Proficient', description: 'Data scripting, automation, API integrations, and AI experimentation.', category: 'development' },
      { name: 'JavaScript', level: 'Advanced', description: 'Modern ESNext, asynchronous runtime, DOM manipulation, event systems.', category: 'development' },
      { name: 'React', level: 'Advanced', description: 'React 19, hooks, component architecture, concurrency, state engines.', category: 'development', highlight: true },
      { name: 'TypeScript', level: 'Advanced', description: 'Strict type safety, generics, union types, AST type-checking.', category: 'development', highlight: true },
      { name: 'Node.js', level: 'Proficient', description: 'REST APIs, server-side runtime, stream processing, CLI tool development.', category: 'development' }
    ]
  },
  {
    id: 'design',
    title: 'DESIGN',
    subtitle: 'Visual identity, editorial layout, and human-computer interfaces',
    skills: [
      { name: 'Figma', level: 'Advanced', description: 'Interactive prototypes, design tokens, auto-layout 5.0, component variants.', category: 'design', highlight: true },
      { name: 'Canva', level: 'Proficient', description: 'Rapid campaign collateral, presentations, and dynamic social templates.', category: 'design' },
      { name: 'Branding', level: 'Advanced', description: 'Brand identity systems, voice, guidelines, and cross-medium coherence.', category: 'design', highlight: true },
      { name: 'Graphic Design', level: 'Advanced', description: 'Swiss grids, poster typography, color theory, and print specifications.', category: 'design', highlight: true },
      { name: 'Illustration', level: 'Proficient', description: 'Vector art, isometric landscapes, iconography, and visual metaphor.', category: 'design' },
      { name: 'UI/UX', level: 'Advanced', description: 'User flows, wireframing, WCAG accessibility, and design system engineering.', category: 'design', highlight: true }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS',
    subtitle: 'Version control, developer environment, and cloud pipelines',
    skills: [
      { name: 'Git', level: 'Advanced', description: 'Branching models, interactive rebasing, merge conflict resolution.', category: 'tools' },
      { name: 'GitHub', level: 'Advanced', description: 'Pull request reviews, GitHub Actions, open-source repository management.', category: 'tools', highlight: true },
      { name: 'Docker', level: 'Proficient', description: 'Containerization, Dockerfile optimizations, multi-stage builds.', category: 'tools' },
      { name: 'VS Code', level: 'Advanced', description: 'Custom developer workflows, debugging configurations, keyboard efficiency.', category: 'tools' },
      { name: 'Firebase', level: 'Proficient', description: 'Firestore real-time listeners, Cloud Storage, Authentication, Hosting.', category: 'tools' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling, v4 design tokens, custom plugins, fluid typography.', category: 'tools', highlight: true }
    ]
  }
];

