import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/projects.interface';

@Pipe({
  name: 'projectsTableData',
})
export class ProjectsTableDataPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(projects: IProject[]): any {
    return projects.map((project) => {
      return {
        ...project,
        startDate: this.datePipe.transform(project.startDate),
        endDate: this.datePipe.transform(project.endDate),
        specializations: project.specializations.reduce((accum, { name }, index, array) => {
          return (accum += index < array.length - 1 ? name + ', ' : name);
        }, ''),
      };
    });
  }
}
