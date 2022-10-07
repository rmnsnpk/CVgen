import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFormInfoComponent } from './projects-form-info.component';

describe('ProjectsFormInfoComponent', () => {
  let component: ProjectsFormInfoComponent;
  let fixture: ComponentFixture<ProjectsFormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsFormInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
