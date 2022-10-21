import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee.routing.module';
import { EmployeePageComponent } from './pages/employee-page/employee.page.component';

import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { EmployeeFormCvComponent } from './components/employee-form-cv/employee-form-cv.component';
import { EmployeeFormInfoComponent } from './components/employee-form-info/employee-form-info.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    EmployeePageComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
    EmployeeFormCvComponent,
    EmployeeFormInfoComponent,
  ],
  imports: [
    EmployeeRoutingModule,
    BaseTableModule,
    SpinnerComponent,
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
