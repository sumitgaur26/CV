export interface Profile {
  name: string;
  role: string;
  tagline: string;
  valueProposition: string;
  location: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string | null;
  resumeUrl: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExpertiseArea {
  title: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tools: string[];
}

export interface CaseStudy {
  id: string;
  name: string;
  period: string;
  overview: string;
  architecture: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string | null;
  credentialUrl: string | null;
}

export interface AIInfraCapability {
  title: string;
  description: string;
}
