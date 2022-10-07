import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationFormComponent } from './pages/authorization-form/authorization-form.component';

@NgModule({
  declarations: [AuthorizationFormComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AuthorizationFormComponent],
})
export class AuthorizationModule {}
