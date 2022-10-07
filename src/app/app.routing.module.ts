import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationFormComponent } from './modules/authorization/pages/authorization-form/authorization-form.component';
import { AUTH_PATH } from './shared/constants/constants';

const routes: Routes = [
  { path: AUTH_PATH.path, component: AuthorizationFormComponent },
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/main/modules/main.module').then(
        (module) => module.MainModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
