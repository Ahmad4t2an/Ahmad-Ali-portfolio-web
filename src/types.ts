export type NavigationTab = 
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'certifications'
  | 'gallery'
  | 'contact';

export type AccentColor = 'cyan' | 'violet' | 'emerald' | 'amber';

export interface Project {
  id: string;
  title: string;
  category: 'Logistics' | 'E-Commerce' | 'Healthcare' | 'Agency' | 'Mobile App' | 'Education' | 'Consulting' | 'Services';
  description: string;
  longDescription?: string;
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
  image: string;
  metrics?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  key: 'core' | 'tooling' | 'backend' | 'other' | 'deployment';
  skills: {
    name: string;
    level: number; // 0 to 100
    iconName?: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isRemote?: boolean;
  bullets: string[];
  techUsed: string[];
  badgeColor?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Template Slot';
  isPlaceholder: boolean;
  credentialUrl?: string;
  image?: string;
  description: string;
  skillsLearned: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'E-Commerce UI' | '3D Corporate' | 'Mobile Web' | 'Dashboards';
  image: string;
  caption: string;
  tags: string[];
}
