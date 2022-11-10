import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerControlComponent } from './date-piker-control.component';

describe('DatePikerControlComponent', () => {
  let component: DatePickerControlComponent;
  let fixture: ComponentFixture<DatePickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
