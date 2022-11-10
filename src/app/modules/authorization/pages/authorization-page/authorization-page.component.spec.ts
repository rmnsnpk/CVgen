import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

import { AuthorizationPageComponent } from './authorization-page.component';

describe('AuthorizationPageComponent', () => {
  let component: AuthorizationPageComponent;
  let fixture: ComponentFixture<AuthorizationPageComponent>;
  let testAuthService = jasmine.createSpyObj('AuthApiService', ['login']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [AuthorizationPageComponent],
      providers: [FormBuilder, { provide: AuthApiService, useValue: testAuthService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
