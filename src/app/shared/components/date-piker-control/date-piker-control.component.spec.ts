import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DatePickerControlComponent } from './date-piker-control.component';

xdescribe('DatePikerControlComponent', () => {
  let component: DatePickerControlComponent;
  let fixture: ComponentFixture<DatePickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerControlComponent, TranslateModule.forRoot()],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
