import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config/config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  private getDataUrl(endpoint: string, language?: string): string {
    if (environment.isProduction) {
      return language
        ? `${environment.api.domain}/${endpoint}?language=${language}`
        : `${environment.api.domain}/${endpoint}`;
    } else {
      return language
        ? `assets/json/${language}/${endpoint}.json`
        : `assets/json/${endpoint}.json`;
    }
  }

  getProfile(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.profilePath, language);
    return this.http.get<any>(url);
  }

  getSkill(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.skillPath, language);
    return this.http.get<any>(url);
  }

  getCertificate(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.certificatePath, language);
    return this.http.get<any>(url);
  }

  getExperience(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.experiencePath, language);
    return this.http.get<any>(url);
  }

  getEducation(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.educationPath, language);
    return this.http.get<any>(url);
  }

  getProject(language: string): Observable<any> {
    const url = this.getDataUrl(config.api.endpoint.projectPath, language);
    return this.http.get<any>(url);
  }
}
