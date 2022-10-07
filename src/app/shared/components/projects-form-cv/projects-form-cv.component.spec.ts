import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFormCvComponent } from './projects-form-cv.component';

describe('ProjectsFormCvComponent', () => {
  let component: ProjectsFormCvComponent;
  let fixture: ComponentFixture<ProjectsFormCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsFormCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsFormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
