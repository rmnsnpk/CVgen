import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  public endPoints = {
    skillsHttp: 'skills',
  };

  constructor(private http: HttpClient) {}

  loadSkills() {
    return this.http.get(environment.apiURL + this.endPoints.skillsHttp);
  }
}
