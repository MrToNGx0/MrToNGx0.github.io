import { Injectable } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/emun/theme-enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeEnabled = false;

  constructor() {
    const savedTheme = localStorage.getItem(ThemeEnum.referenceKey);
    if (savedTheme === ThemeEnum.dark) {
      this.enableDarkMode();
    }
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      document.body.classList.add(ThemeEnum.dark);
      localStorage.setItem(ThemeEnum.referenceKey, ThemeEnum.dark);
    } else {
      document.body.classList.remove(ThemeEnum.dark);
      localStorage.setItem(ThemeEnum.referenceKey, ThemeEnum.light);
    }
  }

  enableDarkMode(): void {
    this.darkModeEnabled = true;
    document.body.classList.add(ThemeEnum.dark);
    localStorage.setItem(ThemeEnum.referenceKey, ThemeEnum.dark);
  }

  disableDarkMode(): void {
    this.darkModeEnabled = false;
    document.body.classList.remove(ThemeEnum.dark);
    localStorage.setItem(ThemeEnum.referenceKey, ThemeEnum.light);
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }
}
