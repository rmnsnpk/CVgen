import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
 selector: 'cvg-add-employee-page',
 templateUrl: './add-employee-page.component.html',
 styleUrls: ['./add-employee-page.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeePageComponent {}
