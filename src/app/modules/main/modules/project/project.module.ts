import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';



@NgModule({
  declarations: [
    ProjectPageComponent,
    EditProjectPageComponent,
    AddProjectPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
