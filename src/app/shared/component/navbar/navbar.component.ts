import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/service/language/language.service';
import { ListMenu, Language } from '../../interface/laguage.interface';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/core/service/theme/theme.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  listMenu!: ListMenu[];
  language!: Language[];
  isDarkMode!: boolean;
  isSelectLanguage!: Language;

  faSun = faCloudSun;
  faMoon = faCloudMoon;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private themeService: ThemeService,
    private translate: TranslateService
  ) {
    this.languageService.getSelectedLanguage().subscribe(language => {
      this.translate.setDefaultLang(language.value.toLowerCase());
    });
  }

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode()
    this.language = this.languageService.getLanguage();
    this.languageService.getSelectedLanguage().subscribe(language => {
      if (language) {
        this.isSelectLanguage = language;
      }
    });
    this.initListMenu();
    setTimeout(() => {
      this.checkActiveLinks();
    }, 0);
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

  checkActiveLinks(): void {
    this.listMenu.forEach(item => {
      item.class = this.router.isActive(item.routerLink, true)
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-700 dark:text-gray-200';
    });
  }

  initListMenu(): void {
    this.listMenu = [
      {
        id: 1,
        label: 'nav.home',
        routerLink: 'home',
        class: '',
      },
      {
        id: 2,
        label: 'nav.about',
        routerLink: 'about',
        class: '',
      },
      {
        id: 3,
        label: 'nav.contact',
        routerLink: 'contact',
        class: '',
      },
    ];
  }
}
