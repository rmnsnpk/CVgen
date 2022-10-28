import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee.routing.module';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { EmployeeFormCvComponent } from './components/employee-form-cv/employee-form-cv.component';
import { EmployeeFormInfoComponent } from './components/employee-form-info/employee-form-info.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { EmployeeTableDataPipe } from './pipes/employee-table-data.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    EmployeeTableDataPipe,
    EmployeePageComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
    EmployeeFormComponent,
    EmployeeFormCvComponent,
    EmployeeFormInfoComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NzTabsModule,
    NzButtonModule,
    BaseTableModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class EmployeeModule {}
