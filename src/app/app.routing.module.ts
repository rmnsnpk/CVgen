import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { AuthorizationFormComponent } from './modules/authorization/authorization-form/authorization-form.component';
import { MainComponent } from './modules/main/pages/main.component';

const routes: Routes = [
  { path: 'auth', component: AuthorizationFormComponent },
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/main/main.module').then(
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
