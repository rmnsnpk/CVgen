import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

import { AUTH_PATH } from './shared/constants/routing-paths.consts';
import { TokenExpireGuard } from './shared/guards/token-expire.guard';

const routes: Routes = [
  {
    path: AUTH_PATH.path,
    loadChildren: () => import('./modules/authorization/authorization.module').then((module) => module.AuthorizationModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((module) => module.MainModule),
    canActivate: [AuthGuard, TokenExpireGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
