import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { ProjectRoutingModule } from './project.routing.module';
import { BaseTableComponent } from 'src/app/shared/base-table/base-table.component';
import { ProjectsFormComponent } from 'src/app/shared/components/projects-form/projects-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjectPageComponent,
    AddProjectPageComponent,
    EditProjectPageComponent,
  ],
  imports: [ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
