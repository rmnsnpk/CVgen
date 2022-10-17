import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { RouterModule } from '@angular/router';
import { StateModule } from './state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, StateModule, CommonModule, BrowserModule, HttpClientModule, BrowserAnimationsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
