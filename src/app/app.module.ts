import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenExpireGuard } from './shared/guards/token-expire.guard';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TitleStrategy } from '@angular/router';
import { HttpLoaderFactory } from './shared/factories/http-loader.factory';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { TokenExpirationInterceptor } from './shared/interceptors/token-expiration.interceptor';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { ChangeTitleService } from './shared/services/change-title.service';
import { StateModule } from './state.module';

import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    StateModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AuthGuard,
    TokenExpireGuard,
    { provide: TitleStrategy, useClass: ChangeTitleService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpirationInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
