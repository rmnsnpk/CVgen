import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EXP_TOKEN, TOKEN } from '../constants/token.const';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public logOut() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(EXP_TOKEN);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public isExpiredToken(): boolean {
    const expDate = new Date(localStorage.getItem(EXP_TOKEN));
    const currentDate = new Date();
    return currentDate > expDate;
  }

  public isLogged(): boolean {
    return !!this.getToken();
  }

  public setToken(token: string, expiresIn: number) {
    if (token) {
      const expDate = new Date(new Date().getTime() + +expiresIn * 1);
      localStorage.setItem(TOKEN, token);
      localStorage.setItem(EXP_TOKEN, expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
