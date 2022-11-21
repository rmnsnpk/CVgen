import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { decreaseRequestsCount, increaseRequestsCount } from 'src/app/ngrx/actions/core.actions';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SpinnerInterceptor } from './spinner.interceptor';

describe('SpinnerInterceptor', () => {
  let store: MockStore;
  let interceptor: SpinnerInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpinnerInterceptor,
          multi: true,
        },
        provideMockStore({}),
      ],
    });
    store = TestBed.inject(MockStore);
    interceptor = new SpinnerInterceptor(store);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should dispatch increase counter', inject([HttpClient, HttpTestingController], (http: HttpClient, mock: HttpTestingController) => {
    spyOn(store, 'dispatch');
    http.get('/api').subscribe((response) => expect(response).toBeTruthy());
    const request = mock.expectOne('/api');
    request.flush({ data: 'test' });
    mock.verify();

    expect(store.dispatch).toHaveBeenCalledWith(increaseRequestsCount());
  }));
  it('should dispatch decrease counter', inject([HttpClient, HttpTestingController], (http: HttpClient, mock: HttpTestingController) => {
    spyOn(store, 'dispatch');
    http.get('/api').subscribe((response) => expect(response).toBeTruthy());
    const request = mock.expectOne('/api');
    request.flush({ data: 'test' });
    mock.verify();

    expect(store.dispatch).toHaveBeenCalledWith(decreaseRequestsCount());
  }));
});
