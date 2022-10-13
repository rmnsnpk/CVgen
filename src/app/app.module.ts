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
import { DatePikerControlComponent } from './shared/components/date-piker-control/date-piker-control.component';
import { NumInputControlComponent } from './shared/components/num-input-control/num-input-control.component';
import { SelectControlComponent } from './shared/components/select-control/select-control.component';
import { MultiSelectControlComponent } from './shared/components/multi-select-control/multi-select-control.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
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
    DatePikerControlComponent,
    InputControlComponent,
    NumInputControlComponent,
    SelectControlComponent,
    MultiSelectControlComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
