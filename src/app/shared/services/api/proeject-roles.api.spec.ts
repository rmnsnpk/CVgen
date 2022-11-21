import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IListingData } from '../../interfaces/listing-data';
import { ProjectRolesApiService } from './prject-roles.api.services';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let service: ProjectRolesApiService;
let fakeProjectFields: IListingData[] = [{ id: 'fakeId', name: 'fakeNames' }];

describe('ProjectRolesApiService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', { get: of(fakeProjectFields) });
    service = new ProjectRolesApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return projects roles array', () => {
    service.loadProjectRoles().subscribe((projectRoles) => {
      expect(projectRoles).toEqual(fakeProjectFields);
    });
  });
});
