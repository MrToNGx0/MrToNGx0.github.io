import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { config } from '../../config/config';
import { Language } from 'src/app/shared/interface/laguage.interface';
import { LanguageEnum } from 'src/app/shared/emun/language-enum';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification/notification.service';
import {
  NotificationMessageEnum,
  NotificationTypeEnum,
} from 'src/app/shared/emun/notification-enum';

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

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  loadLanguages(): Observable<Language[]> {
    const path = environment.isProduction
      ? `${environment.api.domain}${config.api.language.subpath}${config.api.language.endpoint.languagesPath}`
      : `assets/json${config.api.language.endpoint.languagesPath}.json`;

    return this.http
      .get<{ statusCode: number; message: string; data: Language[] }>(path)
      .pipe(
        map((response) => {
          return response.data;
        }),
        tap((languages) => {
          this.languages = languages;
          const storedLanguageCode = localStorage.getItem(
            LanguageEnum.referenceKey,
          );
          const defaultLanguage =
            languages.find(
              (lang) => lang.language_code === storedLanguageCode,
            ) || languages[0];

          this.setLanguage(defaultLanguage);
        }),
        catchError((error) => {
          this.notificationService.show(
            NotificationTypeEnum.Error,
            NotificationMessageEnum.ErrorFetchLanguage,
          );
          this.languages = [];
          return of([]);
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
