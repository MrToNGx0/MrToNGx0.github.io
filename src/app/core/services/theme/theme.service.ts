import { Injectable } from '@angular/core';
import {
  LOCAL_STORAGE_KEYS,
  THEME_CODE,
} from 'src/app/core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeEnabled = false;

  constructor() {
    const savedTheme = localStorage.getItem(
      LOCAL_STORAGE_KEYS.THEME_REFERENCE_KEY,
    );
    if (savedTheme === THEME_CODE.dark) {
      this.enableDarkMode();
    }
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      document.body.classList.add(THEME_CODE.dark);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.THEME_REFERENCE_KEY,
        THEME_CODE.dark,
      );
    } else {
      document.body.classList.remove(THEME_CODE.dark);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.THEME_REFERENCE_KEY,
        THEME_CODE.light,
      );
    }
  }

  enableDarkMode(): void {
    this.darkModeEnabled = true;
    document.body.classList.add(THEME_CODE.dark);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.THEME_REFERENCE_KEY,
      THEME_CODE.dark,
    );
  }

  disableDarkMode(): void {
    this.darkModeEnabled = false;
    document.body.classList.remove(THEME_CODE.dark);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.THEME_REFERENCE_KEY,
      THEME_CODE.light,
    );
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }
}
