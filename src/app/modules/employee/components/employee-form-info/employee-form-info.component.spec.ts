import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormInfoComponent } from './employee-form-info.component';

describe('EmployeeFormInfoComponent', () => {
 let component: EmployeeFormInfoComponent;
 let fixture: ComponentFixture<EmployeeFormInfoComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   declarations: [EmployeeFormInfoComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(EmployeeFormInfoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
