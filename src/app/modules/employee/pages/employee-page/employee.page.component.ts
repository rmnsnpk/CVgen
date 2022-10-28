import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/core.actions';
import { loadEmployees } from 'src/app/ngrx/actions/employee.actions';
import { allEmployeesSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEES_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { EMPLOYEE_ADD_PATH, EMPLOYEE_EDIT_PATH, EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { IEmployee } from 'src/app/shared/interfaces/employees.interface';
import { EMPLOYEES_TABLE_COLUMNS } from '../../constants/employees-table-columns';

@UntilDestroy()
@Component({
  selector: 'cvg-employee.page',
  templateUrl: './employee.page.component.html',
  styleUrls: ['./employee.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit {
  constructor(private store: Store, private router: Router, private cdr: ChangeDetectorRef) {}

  public readonly columns = EMPLOYEES_TABLE_COLUMNS;

  employees: IEmployee[];

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: EMPLOYEES_BREADCRUMB }));
    this.store.dispatch(loadEmployees());

    this.store
      .select(allEmployeesSelector)
      .pipe(untilDestroyed(this))
      .subscribe((employees) => {
        this.cdr.markForCheck();
        this.employees = employees;
      });
  }

  openEditEmployee(index: number) {
    this.router.navigate([EMPLOYEE_PATH.fullpath, EMPLOYEE_EDIT_PATH.name, this.employees[index].id]);
  }

  openCreateEmployee() {
    this.router.navigate([EMPLOYEE_PATH.fullpath, EMPLOYEE_ADD_PATH.path]);
  }
}
