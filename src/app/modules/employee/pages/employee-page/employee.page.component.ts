import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/breadcrumbs.actions';
import { loadEmployees } from 'src/app/ngrx/actions/employee.actions';
import { EMPLOYEES_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { EmployeeApiService } from 'src/app/shared/services/api/employee.api.service';

@Component({
  selector: 'cvg-employee.page',
  templateUrl: './employee.page.component.html',
  styleUrls: ['./employee.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit {
  public testEmployees$: any;

  // public allEmployees$ = this.store.select(selectAllEmployees);

  constructor(private readonly store: Store, private employeeApiService: EmployeeApiService) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());

    this.testEmployees$ = this.employeeApiService.loadEmployees();
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: EMPLOYEES_BREADCRUMB }));
  }
}
