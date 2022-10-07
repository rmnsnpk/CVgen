import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './pages/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './modules/employee/employee.module';
import { ProjectModule } from './modules/project/project.module';

import { MainRoutingModule } from './main.routing.module';
import { BaseTableComponent } from 'src/app/shared/base-table/base-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsFormComponent } from 'src/app/shared/components/projects-form/projects-form.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SubheaderComponent,
    MenuComponent,
  ],
  imports: [MainRoutingModule, EmployeeModule, ProjectModule, SharedModule],
  exports: [BaseTableComponent, ProjectsFormComponent],
})
export class MainModule {}
