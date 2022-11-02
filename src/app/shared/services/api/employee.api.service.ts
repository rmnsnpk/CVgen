import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  public endPoints = {
    usersHttp: 'users',
    getEmployee: 'users?id=',
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  loadSelectedEmployee(id: string) {
    return this.http.get(environment.apiURL + this.endPoints.getEmployee + id).pipe(map((data: any) => data[0]));
  }

  loadEmployees() {
    return this.http.get(environment.apiURL + this.endPoints.usersHttp);
  }

  postEmployee(formValue: any) {
    return this.http.post(environment.apiURL + this.endPoints.usersHttp, formValue);
  }
}
