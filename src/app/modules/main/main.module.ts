import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { MainRoutingModule } from './main.routing.module';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { TranslateButtonComponent } from 'src/app/shared/components/translate-button/translate-button.component';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { BreadCrumbsComponent } from './components/subheader/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, SubheaderComponent, MenuComponent, BreadCrumbsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateButtonComponent,
    NzIconModule,
    NzTypographyModule,
    BaseTableModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzLayoutModule,
    NzToolTipModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class MainModule {}
