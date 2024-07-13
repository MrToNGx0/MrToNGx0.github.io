import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeEnabled = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
  }

  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  enableDarkMode(): void {
    this.darkModeEnabled = true;
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  disableDarkMode(): void {
    this.darkModeEnabled = false;
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }
}
