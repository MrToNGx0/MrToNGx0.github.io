import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from 'src/app/shared/interface/laguage.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isSelectLanguageSubject: BehaviorSubject<Language>;
  public isSelectLanguage$: Observable<Language>;

  languageKey = 'IsLanguage';
  isSelectLanguage!: Language;
  language: Language[] = [
    {
      id: 1,
      label: 'ไทย',
      linkImage: './assets/icon/thailand.png',
    },
    {
      id: 2,
      label: 'English',
      linkImage: './assets/icon/united-kingdom.png',
    },
  ];

  constructor() {
    const defaultLanguage = this.language[0];
    let initialLanguage = defaultLanguage;

    if (typeof localStorage !== 'undefined') {
      const storedLanguageId = localStorage.getItem(this.languageKey);
      if (storedLanguageId) {
        const selectedLanguageId = parseInt(storedLanguageId, 10);
        const storedLanguage = this.language.find(
          item => item.id === selectedLanguageId
        );
        if (storedLanguage) {
          initialLanguage = storedLanguage;
        }
      }
    }

    this.isSelectLanguageSubject = new BehaviorSubject<Language>(
      initialLanguage
    );
    this.isSelectLanguage$ = this.isSelectLanguageSubject.asObservable();
  }

  getLanguage(): Language[] {
    return this.language;
  }

  getSelectedLanguage(): Observable<Language> {
    return this.isSelectLanguage$;
  }

  setLanguage(language: Language): void {
    localStorage.setItem(this.languageKey, language.id.toString());
    this.isSelectLanguageSubject.next(language);
  }
}
