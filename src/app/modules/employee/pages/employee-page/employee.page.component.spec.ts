import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockPipe } from 'mock-pipe';
import { EmployeeTableDataPipe } from '../../pipes/employee-table-data.pipe';

import { EmployeePageComponent } from './employee.page.component';

describe('EmployeePageComponent', () => {
  let component: EmployeePageComponent;
  let fixture: ComponentFixture<EmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [EmployeePageComponent, MockPipe(EmployeeTableDataPipe, (value) => value)],
      providers: [provideMockStore({}), RouterTestingModule, ChangeDetectorRef],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
