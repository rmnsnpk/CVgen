import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MainComponent } from './pages/main.component';

import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';
import { ProjectsFormComponent } from 'src/app/shared/components/projects-form/projects-form.component';

import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SubheaderComponent,
    MenuComponent,
  ],
  imports: [MainRoutingModule],
  exports: [],
})
export class MainModule {}
