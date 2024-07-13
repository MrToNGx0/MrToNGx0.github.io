export interface SocialMedia {
  label: string;
  icon: string;
  link: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  tel: string;
  location: string;
  jobPosition: string;
  avatarLink: string;
  resumeLink: string;
  social: SocialMedia[];
}
