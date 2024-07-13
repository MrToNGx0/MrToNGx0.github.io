import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profilePath = 'assets/json/profile.json';
  skillPath = 'assets/json/skill.json';
  certificatePath = 'assets/json/certificate.json';
  experiencePath = 'assets/json/experience.json';
  educationPath = 'assets/json/education.json';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get<any>(this.profilePath);
  }

  getSkill(): Observable<any> {
    return this.http.get<any>(this.skillPath);
  }

  getCertificate(): Observable<any> {
    return this.http.get<any>(this.certificatePath);
  }

  getExperience(): Observable<any> {
    return this.http.get<any>(this.experiencePath);
  }

  getEducation(): Observable<any> {
    return this.http.get<any>(this.educationPath);
  }
}
