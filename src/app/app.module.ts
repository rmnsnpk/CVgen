import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app.routing.module';
import { AuthorizationModule } from './modules/authorization/modules/authorization.module';
import { MainModule } from './modules/main/modules/main.module';
import { StateModule } from './state.module';
import { TranslateModule } from '@ngx-translate/core';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    StateModule,
    MainModule,
    AuthorizationModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
