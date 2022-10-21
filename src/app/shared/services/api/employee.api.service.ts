import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  public endPoints = {
    usersHttp: 'users',
  };

  constructor(private http: HttpClient) {}

  loadEmployees() {
    return this.http.get(environment.apiURL + this.endPoints.usersHttp);
  }
}
