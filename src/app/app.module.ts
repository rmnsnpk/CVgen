import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenExpireGuard } from './shared/guards/token-expire.guard';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LanguagesList } from './shared/enums/languages-list.enum';
import { HttpLoaderFactory } from './shared/factories/http-loader.factory';
import { StateModule } from './state.module';
import { TitleStrategy } from '@angular/router';
import { ChangeTitleService } from './shared/services/change-title.service';

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
      defaultLanguage: LanguagesList.English,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [AuthGuard, TokenExpireGuard, { provide: TitleStrategy, useClass: ChangeTitleService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
