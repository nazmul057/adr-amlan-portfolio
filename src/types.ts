// types.ts

export type ProjectType =
  | "Software"
  | "Research Systems"
  | "Biomedical"
  | "Machine Learning"
  | "Mathematical Model"
  | "Mechatronics"
  | "Dynamic System"
  | "Backend"
  | "3D Design";

/** Key into the ART map in components/ProjectArt.tsx */
export type ProjectArtKey =
  | "ecg"
  | "ncv"
  | "records"
  | "hydrogen"
  | "suspension"
  | "daq"
  | "vision"
  | "car";

export interface Project {
  id: number;
  title: string;

  /** bullet-point description */
  description: string[];

  types: ProjectType[];

  tags: string[];

  /** vector artwork drawn in-app; replaces the old raster cards */
  art: ProjectArtKey;

  altText: string;
  href: string;
}

export type ExperienceKind =
  | "research"
  | "secondary"
  | "teaching"
  | "education"
  | "certification"
  | "volunteer"
  | "leadership_extracurricular";

export interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  type: ExperienceKind;

  /** short description of the organization / group */
  orgDesc?: string;
  /** noun used in the "Explore ___" link label */
  orgType?: string;

  /** city / country, or "Remote" */
  location?: string;
  /** funding body, collaboration, or similar footnote */
  note?: string;

  details?: string[];
  courses?: string[];
  /** courses attended but not taken for credit */
  auditedCourses?: string[];
  tags?: string[];

  cgpa?: string;
  honors?: string;
  /** e.g. thesis title and supervisor */
  thesis?: string;

  link?: string;
  engagement?: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";

  /** marks an ongoing role, used for the pulsing timeline node */
  current?: boolean;
}

export interface Publication {
  id: number;
  authors: string;
  title: string;
  venue: string;
  year: string;
  status: "In preparation" | "Submitted" | "Published";
  note?: string;
}

export interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
}

export type Skill = {
  category: string;
  icon: string;
  items: string[];
};
