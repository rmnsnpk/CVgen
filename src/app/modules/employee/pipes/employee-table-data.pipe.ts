import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from 'src/app/shared/interfaces/employees.interface';

@Pipe({
  name: 'employeeTableData',
})
export class EmployeeTableDataPipe implements PipeTransform {
  transform(employees: IEmployee[]): any {
    return employees.map((employee) => {
      return {
        ...employee,
        skills: employee.skills.reduce((acc, { name }, index, array) => (acc += index < array.length - 1 ? name + ', ' : name), ''),
      };
    });
  }
}
