import { Component, OnInit } from '@angular/core';
import { Language, ListMenu } from '../../interface/language.interface';
import { LanguageService } from '../../../core/service/language/language.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  listMenu!: ListMenu[];
  language!: Language[];
  isSelectLanguage!: Language;

  faSun = faSun;
  faMoon = faMoon;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.language = this.languageService.getLanguage();
    this.languageService.getSelectedLanguage().subscribe(language => {
      if (language) {
        this.isSelectLanguage = language;
      }
    });
    this.initListMenu();
  }

  onSelectLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  initListMenu(): void {
    this.listMenu = [
      {
        id: 1,
        label: 'Home',
        routerLink: 'home',
        class: '',
      },
      {
        id: 2,
        label: 'About',
        routerLink: 'about',
        class: '',
      },
      {
        id: 3,
        label: 'Contact',
        routerLink: 'contact',
        class: '',
      },
    ];
  }
}
