import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ProjectsTableDataPipe } from './projects-table-data.pipe';

describe('ProjectsTableDataPipe', () => {
  let pipe: ProjectsTableDataPipe;
  let datePipe: DatePipe;
  const projects = [
    {
      responsibilities: [{ id: 'fakeId', name: 'fakeNames' }],
      projectRoles: [{ id: 'fakeId', name: 'fakeNames' }],
      specializations: [
        { id: 'fakeId', name: 'fakeNames' },
        { id: 'fakeId2', name: 'fakeNames2' },
      ],
      name: 'a',
      secondName: 'a',
      startDate: '2022-06-15T21:00:00.000Z',
      endDate: '2022-06-15T21:00:00.000Z',
      teamSize: 5,
      tasksPerformed: 'a',
      description: 'a',
      id: 'dsf',
    },
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DatePipe],
    });
    datePipe = TestBed.inject(DatePipe);
    pipe = new ProjectsTableDataPipe(datePipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform start and end date', () => {
    let result = pipe.transform(projects);
    expect(result[0].startDate).toEqual('Jun 15, 2022');
    expect(result[0].endDate).toEqual('Jun 15, 2022');
  });
});
