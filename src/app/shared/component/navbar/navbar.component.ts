import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { ListMenu, Language } from '../../../core/models/laguage.interface';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NAVBAR_MENUS } from 'src/app/core/constants/menu.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listMenu: ListMenu[] = NAVBAR_MENUS;
  languages!: Language[];
  isDarkMode!: boolean;
  isSelectLanguage!: Language;

  faSun = faCloudSun;
  faMoon = faCloudMoon;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private themeService: ThemeService,
    private translate: TranslateService,
  ) {
    this.languageService.getSelectedLanguage().subscribe((language) => {
      this.translate.setDefaultLang(language.language_code.toLowerCase());
    });
  }

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.languageService.loadLanguages().subscribe((languages: Language[]) => {
      this.languages = languages;
    });
    this.languageService.getSelectedLanguage().subscribe((language) => {
      if (language) {
        this.isSelectLanguage = language;
      }
    });
  }

  onSelectLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  isActive(routerLink: string): boolean {
    return this.router.isActive(routerLink, true);
  }
}
