import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
 selector: 'cvg-employee-form-info',
 templateUrl: './employee-form-info.component.html',
 styleUrls: ['./employee-form-info.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormInfoComponent {}
