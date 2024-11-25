import { Skill } from './skill.interface';

export interface Project {
  title: string;
  description: string;
  banner_url: string;
  link: string;
  skills: Skill[];
}
