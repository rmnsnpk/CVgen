import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IProjectRolesState } from 'src/app/ngrx/reducers/project-roles.reducers';
import { IResponsibilitiesState } from 'src/app/ngrx/reducers/responsibilities.reducers';
import { ISpecializationsState } from 'src/app/ngrx/reducers/specializations.reducers';
import { IListingData } from '../../interfaces/listing-data';

import { ProjectsFormComponent } from './projects-form.component';

describe('ProjectsFormComponent', () => {
  let component: ProjectsFormComponent;
  let fixture: ComponentFixture<ProjectsFormComponent>;
  let fakeProjectFields = [{ id: 'fakeId', name: 'fakeNames' }];
  let initialState = {
    specializations: {
      specializations: fakeProjectFields,
    },
    responsibilities: { responsibilities: fakeProjectFields },
    projectRoles: { projectRoles: fakeProjectFields },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsFormComponent, TranslateModule.forRoot(), BrowserAnimationsModule],
      providers: [provideMockStore<FakeProjectsFormStore>({ initialState }), { provide: NZ_I18N, useValue: en_US }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get properties from store', () => {
    let props: FakeProps = {
      responsibilities: null,
      specializations: null,
      projectRoles: null,
    };

    component.responsibilities$.subscribe((responsibilities) => (props.responsibilities = responsibilities));
    component.projectRoles$.subscribe((projectRoles) => (props.projectRoles = projectRoles));
    component.specializations$.subscribe((specializations) => (props.specializations = specializations));
    expect(props.projectRoles).toEqual(fakeProjectFields);
    expect(props.responsibilities).toEqual(fakeProjectFields);
    expect(props.specializations).toEqual(fakeProjectFields);
  });

  it('should create form', () => {
    expect(component.projectsForm).toBeTruthy();
  });

  it('should patch value', () => {
    let formValue = {
      name: 'oleg',
      secondName: 'ol',
      teamSize: 5,
      startDate: new Date(),
      endDate: new Date(),
      projectRoles: ['fakeRole'],
      specializations: ['fakeSpecialization'],
      responsibilities: ['fakeResponsibility'],
      description: 'descr',
      tasksPerformed: 'tasks',
    };
    component.writeValue(formValue);
    expect(component.projectsForm.value).toEqual(formValue);
  });

  it('should define change function', () => {
    let foo = function () {};
    component.registerOnChange(foo);
    expect(component.onChange).toEqual(foo);
  });
  it('should define touch function', () => {
    let foo = function () {};
    component.registerOnTouched(foo);
    expect(component.onTouched).toEqual(foo);
  });
  it('should set ngControl', () => {
    let control = new FormControl();
    component.validate(control);
    expect(component.ngControl).toEqual(control);
  });
});
interface FakeProjectsFormStore {
  specializations: ISpecializationsState;
  responsibilities: IResponsibilitiesState;
  projectRoles: IProjectRolesState;
}

interface FakeProps {
  specializations: IListingData[];
  responsibilities: IListingData[];
  projectRoles: IListingData[];
}
