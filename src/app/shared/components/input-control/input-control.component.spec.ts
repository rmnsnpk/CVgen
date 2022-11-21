import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { InputControlComponent } from './input-control.component';

xdescribe('InputControlComponent', () => {
  let component: InputControlComponent;
  let fixture: ComponentFixture<InputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputControlComponent, TranslateModule.forRoot()],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(InputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
