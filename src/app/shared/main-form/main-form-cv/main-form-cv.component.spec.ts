import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormCvComponent } from './main-form-cv.component';

describe('MainFormCvComponent', () => {
  let component: MainFormCvComponent;
  let fixture: ComponentFixture<MainFormCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
