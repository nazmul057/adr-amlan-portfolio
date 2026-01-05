// types.ts

export type ProjectType =
  | "Software"
  | "Data Engineering"
  | "Biomedical"
  | "Machine Learning"
  | "Mathematical Model"
  | "Mechatronics"
  | "Dynamic System"
  | "Backend"
  | "3D Design";

export interface Project {
  id: number;
  title: string;

  // bullet-point description
  description: string[];

  // changed: multi-type support
  types: ProjectType[];

  tags: string[];
  imageUrl: string;
  altText: string;
  href: string;
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
