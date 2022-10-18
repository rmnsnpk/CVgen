import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { ProjectsFormModule } from 'src/app/shared/components/projects-form/projects-form.module';
import { HttpLoaderFactory } from 'src/app/shared/factories/http-loader.factory';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './pages/edit-project-page/edit-project-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectRoutingModule } from './project.routing.module';

@NgModule({
  declarations: [ProjectPageComponent, AddProjectPageComponent, EditProjectPageComponent],
  imports: [
    ProjectRoutingModule,
    BaseTableModule,
    ProjectsFormModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ProjectModule {}
