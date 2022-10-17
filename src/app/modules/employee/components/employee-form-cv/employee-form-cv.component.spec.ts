import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormCvComponent } from './employee-form-cv.component';

describe('EmployeeFormCvComponent', () => {
 let component: EmployeeFormCvComponent;
 let fixture: ComponentFixture<EmployeeFormCvComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   declarations: [EmployeeFormCvComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(EmployeeFormCvComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
