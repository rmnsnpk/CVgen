import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authorization/guards/auth.guard';

import { EMPLOYEE_PATH } from './shared/constants/routing-paths.consts';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/authorization/authorization.module').then((module) => module.AuthorizationModule),
  },
  {
    path: EMPLOYEE_PATH.path,
    loadChildren: () => import('./modules/main/main.module').then((module) => module.MainModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
