import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeApiService } from 'src/app/shared/services/api/employee.api.service';
import { loadEmployees } from 'src/app/store/employees/employee.actions';
import { selectAllEmployees } from 'src/app/store/employees/employee.selectors';
import { AppState } from 'src/app/store/app.state';
@Component({
  selector: 'cvg-employee.page',
  templateUrl: './employee.page.component.html',
  styleUrls: ['./employee.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit {
  public testEmployees$: any;

  public allEmployees$ = this.store.select(selectAllEmployees);

  constructor(private readonly store: Store<AppState>, private employeeApiService: EmployeeApiService) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());

    this.testEmployees$ = this.employeeApiService.loadEmployees();
  }
}
