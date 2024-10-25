export interface Language {
  id: number;
  language_code: string;
  language_name: string;
  picture_url: string;
}

export interface ListMenu {
  id: number;
  label: string;
  routerLink: string;
  class: string;
}
