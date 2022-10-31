import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesApiService {
  public endPoints = {
    roles: 'roles',
  };

  constructor(private http: HttpClient) {}

  public loadRoles() {
    return this.http.get(environment.apiURL + this.endPoints.roles);
  }
}
