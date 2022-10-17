import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { AUTH_PATH } from '../constants/routing-paths.consts';
import { AuthApiService } from '../services/api/auth.api.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private authApiService: AuthApiService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLogged && this.authService.isExpiredToken) {
      this.authService.logOut();
      this.router.navigate([AUTH_PATH.path]);
      return EMPTY;
    }
    return next.handle(req);
  }
}
