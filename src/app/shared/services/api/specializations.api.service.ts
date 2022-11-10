import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListingData } from '../../interfaces/listing-data';

@Injectable({
  providedIn: 'root',
})
export class SpecializationsApiService {
  public endPoints = {
    specializations: 'specializations',
  };

  constructor(private http: HttpClient) {}

  public loadSpecializations(): Observable<IListingData[]> {
    return this.http.get<IListingData[]>(environment.apiURL + this.endPoints.specializations);
  }
}
