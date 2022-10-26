import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectsApiService {
  public endPoints = {
    projects: 'projects',
  };

  constructor(private http: HttpClient) {}

  public loadProjects() {
    return this.http.get(environment.apiURL + this.endPoints.projects);
  }
}
