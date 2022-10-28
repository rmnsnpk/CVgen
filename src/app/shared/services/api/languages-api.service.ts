import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguagesApiService {
  public endPoints = {
    languagesHttp: 'languages',
  };

  constructor(private http: HttpClient) {}

  loadLanguages() {
    return this.http.get(environment.apiURL + this.endPoints.languagesHttp);
  }
}
