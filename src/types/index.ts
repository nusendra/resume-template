export interface Resume {
  name: string;
  title: string;
  headline?: string;
  avatarUrl: string;
  address: string;
  addressUrl: string;
  about: string;
  objectives: string[];
  links: Link[];
  workExperiences: WorkExperience[];
  notableProjects?: NotableProject[];
  educations: Education[];
  additionalActivities: AdditionalActivity[];
  skills: Skill[];
  languages?: Language[];
  meta?: ResumeMeta;
}

export interface Link {
  id:
    | "maps"
    | "github"
    | "linkedin"
    | "youtube"
    | "x"
    | "instagram"
    | "facebook";
  name: string;
  url: string;
}

export interface WorkExperience {
  id: number;
  companyName: string;
  location: string;
  years: string;
  roles: string;
  jobDesc: string[];
  type: string;
  employmentType?: string;
}

export interface NotableProject {
  id: number;
  name: string;
  role: string;
  description: string;
  stack: string[];
  url?: string;
  year: string;
  category: string;
}

export interface Education {
  id: number;
  title: string;
  schoolName: string;
  location: string;
  years: string;
}

export interface AdditionalActivity {
  type: string;
  activities: string[];
}

export interface Skill {
  type: string;
  tools: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeMeta {
  updatedAt: string;
}
