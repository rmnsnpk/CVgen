import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPLOYEE_PATH, PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: EMPLOYEE_PATH.path,
        title: 'EMPLOYEES.TITLES.MAIN',
        loadChildren: () => import('../employee/employee.module').then((module) => module.EmployeeModule),
      },
      {
        path: PROJECTS_PATH.path,
        title: 'PROJECTS.TITLES.MAIN',
        loadChildren: () => import('../project/project.module').then((module) => module.ProjectModule),
      },
      { path: '**', redirectTo: EMPLOYEE_PATH.path },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
