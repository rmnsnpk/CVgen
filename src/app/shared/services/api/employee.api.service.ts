import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  public endPoints = {
    usersHttp: 'users',
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  loadEmployees() {
    return this.http.get(environment.apiURL + this.endPoints.usersHttp);
  }

  postEmployee(formValue: any) {
    console.log('post empoyee', formValue);

    return this.http.post(environment.apiURL + this.endPoints.usersHttp, formValue).subscribe();
  }
}
