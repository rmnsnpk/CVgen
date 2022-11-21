import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockPipe } from 'mock-pipe';
import { ProjectsTableDataPipe } from '../../pipes/projects-table-data.pipe';

import { Router } from '@angular/router';
import { PROJECTS_ADD_PATH, PROJECTS_EDIT_PATH, PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { IListingData } from 'src/app/shared/interfaces/listing-data';
import { ProjectPageComponent } from './project-page.component';
import { IProjectsState } from '../../../../ngrx/reducers/projects.reducers';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;
  let fakeProjectFields: IListingData[] = [{ id: 'fakeId', name: 'fakeNames' }];
  let initialState: IState = {
    projects: {
      projects: [
        {
          responsibilities: fakeProjectFields,
          projectRoles: fakeProjectFields,
          specializations: fakeProjectFields,
          name: 'a',
          secondName: 'a',
          startDate: '22.05.22',
          endDate: '22.05.22',
          teamSize: 5,
          tasksPerformed: 'a',
          description: 'a',
          id: 'dsf',
        },
      ],
      selectedProject: null,
    },
  };

  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ProjectPageComponent, MockPipe(ProjectsTableDataPipe, (value) => value)],
      providers: [provideMockStore<IState>({ initialState }), { provide: Router, useValue: routerSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get projects list from store', () => {
    component.getProjectsFromStore();

    expect(component.projects).toEqual(initialState.projects.projects);
  });

  it('should navigate to edit page', () => {
    let id = 'dfghjk';
    component.openEditProject(id);
    expect(routerSpy.navigate).toHaveBeenCalledWith([PROJECTS_PATH.fullpath, PROJECTS_EDIT_PATH.name, id]);
  });
  it('should navigate to create page', () => {
    component.openCreateProject();
    expect(routerSpy.navigate).toHaveBeenCalledWith([PROJECTS_PATH.path, PROJECTS_ADD_PATH.path]);
  });
});
interface IState {
  projects: IProjectsState;
}
