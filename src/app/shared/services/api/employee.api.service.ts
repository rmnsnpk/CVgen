import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICV } from '../../interfaces/cv.interface';
import { IEmployee, ISelectedEmployee } from '../../interfaces/employees.interface';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  public endPoints = {
    users: 'users',
    getEmployee: 'users?id=',
    cv: 'cv',
    virtualCv: 'virtualCv',
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

  loadEmployees(): Observable<any> {
    return this.http.get(environment.apiURL + this.endPoints.users);
  }

  postEmployee(formValue: IEmployee) {
    return this.http.post<any>(environment.apiURL + this.endPoints.users, formValue);
  }

  updateEmployee(formValue: any) {
    return this.http.put<any>(environment.apiURL + this.endPoints.users, formValue);
  }

  createCv(employee: IEmployee) {
    const cv: ICV = {
      user: employee.id,
      name: ' ',
      description: ' ',
      projects: [],
    };
    console.log(cv);
    return this.http.post<any>(environment.apiURL + this.endPoints.cv, cv);
  }

  createVirtualCv(cv: ICV) {
    return this.http.post<any>(environment.apiURL + this.endPoints.virtualCv, cv);
  }
}
