import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateEmployee } from 'src/app/ngrx/actions/employee.actions';
import { IEmployee } from 'src/app/shared/interfaces/employees.interface';
@Component({
  selector: 'cvg-edit-employee-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeePageComponent {
  constructor(private store: Store) {}

  public editEmployee(employee: IEmployee) {
    this.store.dispatch(updateEmployee({ employee: employee }));
  }
}
