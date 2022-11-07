import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListingData } from '../../interfaces/listing-data';

@Injectable()
export class ProjectRolesApiService {
  public endPoints = {
    projectRoles: 'project-roles',
  };

  constructor(private http: HttpClient) {}

  public loadProjectRoles(): Observable<IListingData[]> {
    return this.http.get<IListingData[]>(environment.apiURL + this.endPoints.projectRoles);
  }
}
