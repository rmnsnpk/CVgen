import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePikerControlComponent } from './date-piker-control.component';

describe('DatePikerControlComponent', () => {
 let component: DatePikerControlComponent;
 let fixture: ComponentFixture<DatePikerControlComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [DatePikerControlComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(DatePikerControlComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
