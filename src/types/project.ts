export type ProjectCategory = 'design' | 'technology';

export type DesignSubcategory = 
  | 'Branding and Identity' 
  | 'Event Posters' 
  | 'Social Media Design' 
  | 'Illustrations' 
  | 'UI/UX' 
  | 'Creative Experiments';

export type TechSubcategory = 
  | 'Web Applications' 
  | 'AI Applications' 
  | 'Developer Tools' 
  | 'Experiments' 
  | 'Open Source';

export interface BaseProject {
  id: string;
  slug: string;
  title: string;
  number: string; // e.g. "01", "02"
  year: string;
  category: ProjectCategory;
  subcategory: DesignSubcategory | TechSubcategory;
  tagline: string;
  description: string;
  coverImage: string;
  accentColor?: string;
  featured: boolean;
  featuredOrder?: number;
}

export interface DesignProject extends BaseProject {
  category: 'design';
  subcategory: DesignSubcategory;
  brief: string;
  objectives: string[];
  researchAndInspiration: string;
  creativeDirection: {
    concept: string;
    typography: string[];
    colorPalette: { name: string; hex: string }[];
    visualElements: string[];
  };
  designProcess: {
    phase: string;
    title: string;
    description: string;
  }[];
  finalOutcome: string;
  toolsUsed: string[];
  gallery: {
    caption: string;
    type: 'poster' | 'ui' | 'branding' | 'editorial';
    aspectRatio?: string;
    svgVisual?: string;
  }[];
}

export interface TechProject extends BaseProject {
  category: 'technology';
  subcategory: TechSubcategory;
  problemStatement: string;
  solution: string;
  techStack: string[];
  architecture: {
    overview: string;
    layers: { title: string; description: string; tech: string }[];
  };
  keyFeatures: { title: string; description: string }[];
  keyImplementationDetails: string[];
  challengesAndLearnings: {
    challenge: string;
    learning: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export type Project = DesignProject | TechProject;

