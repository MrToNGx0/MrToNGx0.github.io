import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { Language } from 'src/app/core/models/laguage.interface';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification/notification.service';
import {
  API_ENDPOINTS,
  DEFAULT_LANGUAGE,
  LOCAL_STORAGE_KEYS,
  RESPONSE_TYPE,
} from 'src/app/core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isSelectLanguageSubject = new BehaviorSubject<Language>(
    DEFAULT_LANGUAGE,
  );
  public isSelectLanguage$: Observable<Language> =
    this.isSelectLanguageSubject.asObservable();
  public languages: Language[] = [];

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  loadLanguages(): Observable<Language[]> {
    const path = !environment.isMockUp
      ? `${environment.api.domain}${API_ENDPOINTS.languagePath}`
      : API_ENDPOINTS.languageJsonPath;

    return this.http
      .get<{ statusCode: number; message: string; data: Language[] }>(path)
      .pipe(
        map((response) => response.data),
        tap((languages) => {
          this.languages = languages;
          const storedLanguageCode = localStorage.getItem(
            LOCAL_STORAGE_KEYS.LANGUAGE_REFERENCE_KEY,
          );
          const defaultLanguage =
            languages.find(
              (lang) => lang.language_code === storedLanguageCode,
            ) || languages[0];

          this.setLanguage(defaultLanguage);
        }),
        catchError((error) => {
          this.notificationService.show(
            RESPONSE_TYPE.Error,
            'notification.message.errorFetchLanguage',
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
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.LANGUAGE_REFERENCE_KEY,
      language.language_code,
    );
    this.isSelectLanguageSubject.next(language);
  }
}
