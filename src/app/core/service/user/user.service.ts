import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get<any>(config.api.endpoint.profilePath);
  }

  getSkill(): Observable<any> {
    return this.http.get<any>(config.api.endpoint.skillPath);
  }

  getCertificate(): Observable<any> {
    return this.http.get<any>(config.api.endpoint.certificatePath);
  }

  getExperience(): Observable<any> {
    return this.http.get<any>(config.api.endpoint.experiencePath);
  }

  getEducation(): Observable<any> {
    return this.http.get<any>(config.api.endpoint.educationPath);
  }
}
