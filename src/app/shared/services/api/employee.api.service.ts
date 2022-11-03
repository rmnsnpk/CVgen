import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../../interfaces/employees.interface';
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
    return this.http.get(environment.apiURL + this.endPoints.getEmployee + id).pipe(
      map((data: any) => {
        data = data[0];
        data.skills = data.skills.map((item: any) => item.id);
        data.languages = data.languages.map((item: any) => item.id);
        data.role = data.role.id;
        return data;
      }),
    );
  }

  loadEmployees() {
    return this.http.get(environment.apiURL + this.endPoints.usersHttp);
  }

  postEmployee(formValue: IEmployee) {
    return this.http.post<any>(environment.apiURL + this.endPoints.usersHttp, formValue);
  }
}
