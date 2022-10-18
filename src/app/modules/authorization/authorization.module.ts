import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthorizationRoutingModule } from './authorization.routing.module';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';

import { InputControlComponent } from 'src/app/shared/components/input-control/input-control.component';

@NgModule({
  declarations: [AuthorizationPageComponent],
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
  providers: [],
})
export class AuthorizationModule {}
