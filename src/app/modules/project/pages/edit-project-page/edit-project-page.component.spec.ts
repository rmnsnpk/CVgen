import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { getSelectedProject } from 'src/app/ngrx/actions/projects.actions';
import { IProjectsState } from 'src/app/ngrx/reducers/projects.reducers';

import { EditProjectPageComponent } from './edit-project-page.component';

describe('EditProjectPageComponent', () => {
  let component: EditProjectPageComponent;
  let fixture: ComponentFixture<EditProjectPageComponent>;
  let id = 'fakeId';
  const fakeActivatedRoute = {
    snapshot: { params: { id } },
  };
  let actions: Actions;
  let initialState: IState = {
    projects: {
      projects: null,
      selectedProject: {
        projectRoles: ['fakeRole'],
        specializations: ['fakeSpecialization'],
        responsibilities: ['fakeResponsibility'],
        name: 'a',
        secondName: 'a',
        startDate: new Date(),
        endDate: new Date(),
        teamSize: 5,
        tasksPerformed: 'a',
        description: 'a',
        id: 'dsf',
      },
    },
  };
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [EditProjectPageComponent],
      providers: [
        provideMockStore<IState>({ initialState }),
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideMockActions(() => actions),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(EditProjectPageComponent);
    component = fixture.componentInstance;
    component.id = 'randomId';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id from routes', () => {
    expect(component.id).toBe(fakeActivatedRoute.snapshot.params.id);
  });

  it('should dispatch getSelected project with id', () => {
    let dispatch = spyOn(store, 'dispatch').and.callThrough();
    component.getSelectedProject();
    expect(dispatch).toHaveBeenCalledWith(getSelectedProject({ id }));
  });
  it('should get selected project from store', () => {
    component.getSelectedProject();
    expect(component.initialProjectValue).toEqual(initialState.projects.selectedProject);
  });
  it('should patch form value', () => {
    component.getSelectedProject();
    expect(component.projectsForm.value).toEqual(initialState.projects.selectedProject);
  });
  it('should mark form as touched if invalid on save', () => {
    component.projectsForm.setErrors({ a: 'a' });
    component.save();
    expect(component.projectsForm.touched).toBeTrue();
  });
});

interface IState {
  projects: IProjectsState;
}
