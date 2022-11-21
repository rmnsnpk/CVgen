import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IListingData } from '../../interfaces/listing-data';
import { ResponsibilitiesApiService } from './responsibilities.api.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let service: ResponsibilitiesApiService;
let fakeProjectFields: IListingData[] = [{ id: 'fakeId', name: 'fakeNames' }];

describe('ResponsibilitiesApiService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', { get: of(fakeProjectFields) });
    service = new ResponsibilitiesApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return responsibilities array', () => {
    service.loadResponsibilities().subscribe((responsibilities) => {
      expect(responsibilities).toEqual(fakeProjectFields);
    });
  });
});
