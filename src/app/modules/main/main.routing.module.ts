import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EMPLOYEE_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/constants';
import { MainComponent } from './pages/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: EMPLOYEE_PATH.path,
        loadChildren: () =>
          import('../employee/employee.module').then(
            (module) => module.EmployeeModule
          ),
      },
      {
        path: PROJECTS_PATH.path,
        loadChildren: () =>
          import('../project/project.module').then(
            (module) => module.ProjectModule
          ),
      },
      { path: '**', redirectTo: 'employee' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
