import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IListingData } from '../../interfaces/listing-data';
import { SpecializationsApiService } from './specializations.api.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let service: SpecializationsApiService;
let fakeProjectFields: IListingData[] = [{ id: 'fakeId', name: 'fakeNames' }];

describe('SpecializationsApiService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', { get: of(fakeProjectFields) });
    service = new SpecializationsApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return  array', () => {
    service.loadSpecializations().subscribe((specializations) => {
      expect(specializations).toEqual(fakeProjectFields);
    });
  });
});
