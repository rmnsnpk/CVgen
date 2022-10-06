import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateButtonComponent } from './shared/translate-button/translate-button.component';
import { BaseTableComponent } from './shared/base-table/base-table.component';
import { MainFormComponent } from './shared/main-form/main-form.component';
import { MainFormInfoComponent } from './shared/main-form/main-form-info/main-form-info.component';
import { MainFormCvComponent } from './shared/main-form/main-form-cv/main-form-cv.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    MainFormInfoComponent,
    MainFormCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
