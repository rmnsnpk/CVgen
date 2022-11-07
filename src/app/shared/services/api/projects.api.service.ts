import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListingData } from '../../interfaces/listing-data';
import { IProject, ISelectedProject } from '../../interfaces/projects.interface';

@Injectable()
export class ProjectsApiService {
  public endPoints = {
    projects: 'projects',
    projectById: 'projects?id=',
  };

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(environment.apiURL + this.endPoints.projects);
  }

  public createProject(project: any): Observable<IProject> {
    return this.http.post<IProject>(environment.apiURL + this.endPoints.projects, project);
  }

  public getProjectById(id: string): Observable<ISelectedProject> {
    return this.http.get<IProject[]>(environment.apiURL + this.endPoints.projectById + id).pipe(
      map((project: IProject[]): IProject => project[0]),
      map((project: IProject): ISelectedProject => {
        return {
          ...project,
          specializations: project.specializations.map((specialization: IListingData) => specialization.id),
          responsibilities: project.responsibilities.map((responsibility: IListingData) => responsibility.id),
          projectRoles: project.projectRoles.map((projectRole: IListingData) => projectRole.id),
        };
      }),
    );
  }

  public updateProject(project: ISelectedProject): Observable<IProject> {
    console.log(project);

    return this.http.put<IProject>(environment.apiURL + this.endPoints.projects, project);
  }
}
