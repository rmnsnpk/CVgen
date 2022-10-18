import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';

@NgModule({
  declarations: [AuthorizationPageComponent],
  imports: [
    CommonModule,
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
