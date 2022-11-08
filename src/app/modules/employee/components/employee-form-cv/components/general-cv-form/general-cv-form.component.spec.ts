import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCvFormComponent } from './general-cv-form.component';

describe('GeneralCvFormComponent', () => {
  let component: GeneralCvFormComponent;
  let fixture: ComponentFixture<GeneralCvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralCvFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
