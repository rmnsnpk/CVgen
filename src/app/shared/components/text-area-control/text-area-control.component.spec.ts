import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TextAreaControlComponent } from './text-area-control.component';

xdescribe('TextAreaControlComponent', () => {
  let component: TextAreaControlComponent;
  let fixture: ComponentFixture<TextAreaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaControlComponent, TranslateModule.forRoot()],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(TextAreaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
