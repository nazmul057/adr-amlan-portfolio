export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  altText: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  type: 'work' | 'education' | 'certification' | 'volunteer' | 'leadership_extracurricular';
  orgType?: string,
  details?: string[];
  courses?: string[];
  tags?: string[];
  cgpa?: string;
  honors?: string;

  link?: string;
  engagement?: "Full-time" | "Part-time" | "Contract" | "Internship";

  orgDesc?: string; // short 1–2 line description
}

export interface Skill {
  category: string;
  items: string[];
}
