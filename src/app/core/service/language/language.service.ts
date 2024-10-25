import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { config } from '../../config/config';
import { Language } from 'src/app/shared/interface/laguage.interface';
import { LanguageEnum } from 'src/app/shared/emun/language-enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isSelectLanguageSubject = new BehaviorSubject<Language>({
    id: 1,
    language_code: 'EN',
    language_name: 'English',
    picture_url: './assets/icon/united-kingdom.png',
  });
  public isSelectLanguage$: Observable<Language> =
    this.isSelectLanguageSubject.asObservable();
  public languages: Language[] = [];

  constructor(private http: HttpClient) {}

  loadLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(config.api.endpoint.languagesPath).pipe(
      tap((languages) => {
        this.languages = languages;
        const storedLanguageId = localStorage.getItem(
          LanguageEnum.referenceKey,
        );
        const defaultLanguage =
          languages.find((lang) => lang.language_code === storedLanguageId) ||
          languages[0];
        this.setLanguage(defaultLanguage);
      }),
    );
  }

  getSelectedLanguage(): Observable<Language> {
    return this.isSelectLanguage$;
  }

  setLanguage(language: Language): void {
    localStorage.setItem(LanguageEnum.referenceKey, language.language_code);
    this.isSelectLanguageSubject.next(language);
  }
}
