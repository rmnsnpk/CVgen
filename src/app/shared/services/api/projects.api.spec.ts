import { HttpClient } from '@angular/common/http';
import { IListingData } from '../../interfaces/listing-data';
import { ProjectsApiService } from './projects.api.service';
import { of } from 'rxjs';
import { ISelectedProject } from '../../interfaces/projects.interface';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let projectsApiService: ProjectsApiService;
let fakeProjectFields: IListingData[] = [{ id: 'fakeId', name: 'fakeNames' }];
const expectedProjects = [
  {
    responsibilities: fakeProjectFields,
    projectRoles: fakeProjectFields,
    specializations: fakeProjectFields,
    name: 'a',
    secondName: 'a',
    startDate: 'Sun Nov 20 2022 18:58:38 GMT+0100 (Central European Standard Time)',
    endDate: 'Sun Nov 20 2022 18:58:38 GMT+0100 (Central European Standard Time)',
    teamSize: 5,
    tasksPerformed: 'a',
    description: 'a',
    id: 'dsf',
  },
];
const expectedSelectedProject: ISelectedProject = {
  responsibilities: ['fakeId'],
  projectRoles: ['fakeId'],
  specializations: ['fakeId'],
  name: 'a',
  secondName: 'a',
  startDate: new Date('Sun Nov 20 2022 18:58:38 GMT+0100 (Central European Standard Time)'),
  endDate: new Date('Sun Nov 20 2022 18:58:38 GMT+0100 (Central European Standard Time)'),
  teamSize: 5,
  tasksPerformed: 'a',
  description: 'a',
  id: 'dsf',
};
describe('ProjectsApiService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    projectsApiService = new ProjectsApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(projectsApiService).toBeTruthy();
  });
  it('should return expected projects', () => {
    httpClientSpy.get.and.returnValue(of(expectedProjects));
    projectsApiService.getProjects().subscribe((projects) => {
      expect(projects).toEqual(expectedProjects);
    });
  });
  it('should create new project', () => {
    httpClientSpy.post.and.returnValue(of(expectedProjects[0]));
    projectsApiService.createProject(expectedProjects[0]).subscribe((project) => expect(project).toEqual(expectedProjects[0]));
  });
  it('should return project by id', () => {
    httpClientSpy.get.and.returnValue(of(expectedProjects));
    projectsApiService.getProjectById('any').subscribe((selectedProject) => {
      expect(selectedProject).toEqual(expectedSelectedProject);
    });
  });
  it('should update project', () => {
    httpClientSpy.put.and.returnValue(of(expectedProjects[0]));
    projectsApiService.updateProject(expectedSelectedProject).subscribe((project) => expect(project).toEqual(expectedProjects[0]));
  });
});
