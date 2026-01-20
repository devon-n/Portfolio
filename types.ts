import { IconType } from "react-icons";

export interface IExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export enum ServiceCategory {
  Infrastructure = "Infrastructure & Systems",
  Web = "Web & Interface",
  Blockchain = "Blockchain & Security",
  AI = "AI & Automation"
}

export interface IService {
  Icon: IconType;
  title: string;
  about: string;
  category: ServiceCategory;
}

export enum SkillCategory {
  JavaScript = "JavaScript",
  Python = "Python",
  Databases = "Databases",
  Blockchain = "Blockchain"
}

export interface ISkill {
  Icon: IconType;
  name: string;
  category: SkillCategory;
}


export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "Blockchain" | "AI" | "Full Stack"

export type ThemeType = 'architect' | 'neural' | 'matrix';