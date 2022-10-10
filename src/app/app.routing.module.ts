import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AUTH_PATH } from './shared/constants/routing-paths';

const routes: Routes = [
  {
    path: AUTH_PATH.path,
    loadChildren: () =>
      import('./modules/authorization/authorization.module').then(
        (module) => module.AuthorizationModule,
      ),
  },
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((module) => module.MainModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
