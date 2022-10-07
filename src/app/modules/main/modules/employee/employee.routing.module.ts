import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsFormCvComponent } from 'src/app/shared/components/projects-form-cv/projects-form-cv.component';
import { ProjectsFormInfoComponent } from 'src/app/shared/components/projects-form-info/projects-form-info.component';
import { AddProjectPageComponent } from '../project/add-project-page/add-project-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './edit-employee-page/edit-employee-page.component';
import { EmployeePageComponent } from './employee-page/employee.page.component';

const routes: Routes = [
  { path: '', component: EmployeePageComponent },
  {
    path: 'edit',
    component: EditEmployeePageComponent,
    children: [
      { path: 'info', component: ProjectsFormInfoComponent },
      { path: 'cv', component: ProjectsFormCvComponent },
    ],
  },
  {
    path: 'add',
    component: AddEmployeePageComponent,
    children: [
      {
        path: 'info',
        component: ProjectsFormInfoComponent,
      },
      {
        path: 'cv',
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
