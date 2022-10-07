import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-employee.page',
  templateUrl: './employee.page.component.html',
  styleUrls: ['./employee.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent {}
