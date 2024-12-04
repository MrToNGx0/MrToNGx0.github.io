import { Skill } from './skill.interface';

export interface Project {
  title: string;
  description: string;
  banner_url: string;
  link: string;
  github_link: string;
  skills: Skill[];
}
