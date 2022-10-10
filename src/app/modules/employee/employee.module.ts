import { NgModule } from '@angular/core';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';
import { EmployeeRoutingModule } from './employee.routing.module';

import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { EmployeeFormCvComponent } from './components/employee-form-cv/employee-form-cv.component';
import { EmployeeFormInfoComponent } from './components/employee-form-info/employee-form-info.component';

@NgModule({
  declarations: [
    EmployeePageComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
    EmployeeFormCvComponent,
    EmployeeFormInfoComponent,
  ],
  imports: [EmployeeRoutingModule, BaseTableModule],
})
export class EmployeeModule {}
