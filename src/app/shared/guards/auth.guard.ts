import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_PATH } from 'src/app/shared/constants/routing-paths.consts';

import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate([`${AUTH_PATH.fullpath}`]);
      return false;
    }
    return true;
  }

  constructor(private authService: AuthService, public router: Router) {}
}
