import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private http: HttpClient) {}

  private getProjects(): void {
    console.log('projects');
  }
}
