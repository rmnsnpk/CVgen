import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_PATH } from 'src/app/shared/constants/routing-paths.consts';

import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenExpireGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLogged() && this.authService.isExpiredToken()) {
      this.authService.logOut();
      this.router.navigate([`${AUTH_PATH.fullpath}`]);
      return false;
    }
    return true;
  }
}
