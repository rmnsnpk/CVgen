import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NumInputControlComponent } from './num-input-control.component';

xdescribe('NumInputControlComponent', () => {
  let component: NumInputControlComponent;
  let fixture: ComponentFixture<NumInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumInputControlComponent, TranslateModule.forRoot()],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(NumInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
