import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsFormCvComponent } from 'src/app/shared/components/projects-form-cv/projects-form-cv.component';
import { ProjectsFormInfoComponent } from 'src/app/shared/components/projects-form-info/projects-form-info.component';
import {
  EMPLOYEE_ADD_PATH,
  EMPLOYEE_CV_PATH,
  EMPLOYEE_EDIT_PATH,
  EMPLOYEE_INFO_PATH,
} from 'src/app/shared/constants/constants';
import { AddEmployeePageComponent } from './components/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './components/edit-employee-page/edit-employee-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';

const routes: Routes = [
  { path: '', component: EmployeePageComponent },
  {
    path: EMPLOYEE_EDIT_PATH.path,
    component: EditEmployeePageComponent,
    children: [
      { path: EMPLOYEE_INFO_PATH.path, component: ProjectsFormInfoComponent },
      { path: EMPLOYEE_CV_PATH.path, component: ProjectsFormCvComponent },
    ],
  },
  {
    path: EMPLOYEE_ADD_PATH.path,
    component: AddEmployeePageComponent,
    children: [
      {
        path: EMPLOYEE_INFO_PATH.path,
        component: ProjectsFormInfoComponent,
      },
      {
        path: EMPLOYEE_CV_PATH.path,
        component: ProjectsFormCvComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
