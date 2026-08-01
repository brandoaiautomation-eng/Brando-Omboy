export interface TechSkill {
  name: string;
  category: 'Workflow Automation' | 'AI & LLM' | 'Integrations' | 'Cloud & Productivity' | 'Analytics & Data' | 'Databases & Tools';
  level?: string;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
  metrics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  platform: 'Zapier' | 'Make.com';
  driveLink: string;
  previewImage?: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  fullDescription: string;
  workflowNodes: { id: string; name: string; type: 'trigger' | 'action' | 'ai' | 'database'; icon: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  toolsUsed: string[];
  stat: string;
  statLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
  verified: boolean;
}
