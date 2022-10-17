import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { AuthorizationRoutingModule } from './authorization.routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputControlComponent } from 'src/app/shared/components/input-control/input-control.component';
import { AuthGuard } from '../../shared/guards/auth.guard';

@NgModule({
  declarations: [AuthorizationPageComponent, AuthorizationFormComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    InputControlComponent,
  ],
  providers: [AuthGuard],
})
export class AuthorizationModule {}
