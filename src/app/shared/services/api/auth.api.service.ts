import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthRequest, IAuthResponse } from '../../interfaces/auth.interface';
import { endPoints } from '../../constants/endpoints';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private http: HttpClient) {}

  public login(user: IAuthRequest): Observable<IAuthResponse> {
    const url = environment.apiURL + endPoints.authHttp;

    return this.http.post<IAuthResponse>(url, user);
  }
}
