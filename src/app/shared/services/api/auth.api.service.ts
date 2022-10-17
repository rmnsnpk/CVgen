import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthRequest, IAuthResponse } from '../../interfaces/auth.interface';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  public endPoints = {
    authHttp: 'auth/login',
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  public logIn(user: IAuthRequest): Observable<IAuthResponse> {
    const url = environment.apiURL + this.endPoints.authHttp;

    return this.http.post<IAuthResponse>(url, user).pipe(
      tap((data: IAuthResponse) => {
        this.authService.setToken(data.accessToken, +data.expiresIn);
      }),
    );
  }
}
