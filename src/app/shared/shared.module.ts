import { NgModule } from '@angular/core';
import { BaseTableComponent } from 'src/app/shared/base-table/base-table.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ProjectsFormCvComponent } from './components/projects-form-cv/projects-form-cv.component';
import { ProjectsFormInfoComponent } from './components/projects-form-info/projects-form-info.component';

@NgModule({
  declarations: [
    BaseTableComponent,
    ProjectsFormComponent,
    ProjectsFormCvComponent,
    ProjectsFormInfoComponent,
  ],
  imports: [],
  exports: [BaseTableComponent, ProjectsFormComponent],
})
export class SharedModule {}
