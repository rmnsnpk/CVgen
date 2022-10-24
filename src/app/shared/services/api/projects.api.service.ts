import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProjectData } from '../../interfaces/projects.interface';

@Injectable()
export class ProjectsApiService {
  public endPoints = {
    projects: '/projects',
  };

  constructor(private http: HttpClient) {}

  public getProjects() {
    this.http.get<Observable<IProjectData>>(environment.apiURL + this.endPoints.projects).subscribe((v) => {
      console.log(v);
    });
  }
}
