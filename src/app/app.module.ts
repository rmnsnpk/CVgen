import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
import { StateModule } from './state.module';
import { InputControlComponent } from './shared/components/input-control/input-control.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    StateModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    InputControlComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
