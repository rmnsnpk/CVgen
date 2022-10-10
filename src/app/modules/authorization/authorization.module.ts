import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
@NgModule({
  declarations: [AuthorizationPageComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AuthorizationPageComponent],
})
export class AuthorizationModule {}
