import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslateButtonComponent } from './shared/components/translate-button/translate-button.component';
import { BaseTableComponent } from './shared/base-table/base-table.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainModule } from './modules/main/main.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './modules/main/pages/main.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    MainModule,
    AuthorizationModule,

    CommonModule,
    RouterModule,
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
