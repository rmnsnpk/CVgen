import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCvFormComponent } from './education-cv-form.component';

describe('EducationCvFormComponent', () => {
  let component: EducationCvFormComponent;
  let fixture: ComponentFixture<EducationCvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCvFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
