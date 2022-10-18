import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { MainRoutingModule } from './main.routing.module';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { BreadCrumbsComponent } from './components/subheader/breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SubheaderComponent,
    MenuComponent,
    BreadCrumbsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzIconModule,
    NzTypographyModule,
    BaseTableModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzLayoutModule,
    NzToolTipModule,
  ],
})
export class MainModule {}
