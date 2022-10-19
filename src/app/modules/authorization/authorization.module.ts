import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputControlComponent } from 'src/app/shared/components/input-control/input-control.component';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { AuthorizationRoutingModule } from './authorization.routing.module';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';

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
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
})
export class AuthorizationModule {}
