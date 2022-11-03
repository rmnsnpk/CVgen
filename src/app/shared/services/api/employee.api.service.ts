import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee, ISelectedEmployee } from '../../interfaces/employees.interface';
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

  loadSelectedEmployee(id: string): Observable<ISelectedEmployee> {
    return this.http.get<Observable<ISelectedEmployee>>(environment.apiURL + this.endPoints.getEmployee + id).pipe(
      map((data: any) => {
        data = data[0];
        data.skills = data.skills.map((item: any) => item.id);
        data.languages = data.languages.map((item: any) => item.id);
        data.role = data.role.id;
        data.id = data.id;
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

  updateEmployee(formValue: any) {
    return this.http.put<any>(environment.apiURL + this.endPoints.usersHttp, formValue);
  }
}
