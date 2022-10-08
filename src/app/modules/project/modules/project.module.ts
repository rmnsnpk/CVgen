import { NgModule } from '@angular/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { ProjectsFormModule } from 'src/app/shared/components/projects-form/projects-form.module';
import { AddProjectPageComponent } from '../components/add-project-page/add-project-page.component';
import { EditProjectPageComponent } from '../components/edit-project-page/edit-project-page.component';
import { ProjectPageComponent } from '../pages/project-page/project-page.component';
import { ProjectRoutingModule } from './project.routing.module';

@NgModule({
  declarations: [ProjectPageComponent, AddProjectPageComponent, EditProjectPageComponent],
  imports: [ProjectRoutingModule, BaseTableModule, ProjectsFormModule],
})
export class ProjectModule {}
