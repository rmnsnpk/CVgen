import { NgModule } from '@angular/core';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';
import { EmployeeRoutingModule } from './employee.routing.module';

import { AddEmployeePageComponent } from './components/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './components/edit-employee-page/edit-employee-page.component';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';

@NgModule({
  declarations: [
    EmployeePageComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
  ],
  imports: [EmployeeRoutingModule, BaseTableModule],
})
export class EmployeeModule {}
