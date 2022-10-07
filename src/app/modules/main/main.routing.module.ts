import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main.module';
import { EmployeePageComponent } from './modules/employee/employee-page/employee.page.component';

import { ProjectPageComponent } from './modules/project/project-page/project-page.component';
import { MainComponent } from './pages/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('../main/modules/employee/employee.module').then(
            (module) => module.EmployeeModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../main/modules/project/project.module').then(
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
