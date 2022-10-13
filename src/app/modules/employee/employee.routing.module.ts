import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EMPLOYEE_ADD_PATH, EMPLOYEE_EDIT_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';

const routes: Routes = [
  { path: '', component: EmployeePageComponent },
  {
    path: EMPLOYEE_EDIT_PATH.path,
    component: EditEmployeePageComponent,
  },
  {
    path: EMPLOYEE_ADD_PATH.path,
    component: AddEmployeePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
