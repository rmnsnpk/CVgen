import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [AuthorizationFormComponent],
  imports: [CommonModule],
  providers: [AuthService],
  exports: [AuthorizationFormComponent],
})
export class AuthorizationModule {}
