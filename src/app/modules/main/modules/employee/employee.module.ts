import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from './employee-page/employee.page.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { BaseTableComponent } from 'src/app/shared/base-table/base-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditEmployeePageComponent } from './edit-employee-page/edit-employee-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';

@NgModule({
  declarations: [
    EmployeePageComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
  ],
  imports: [EmployeeRoutingModule, SharedModule],
})
export class EmployeeModule {}
