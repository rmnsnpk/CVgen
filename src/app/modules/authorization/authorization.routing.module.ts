import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';

const routes: Routes = [
 {
  path: '',
  component: AuthorizationPageComponent,
 },

 { path: '**', redirectTo: '/' },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule {}
