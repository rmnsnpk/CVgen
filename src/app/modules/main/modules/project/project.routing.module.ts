import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './edit-project-page/edit-project-page.component';

const routes: Routes = [
  { path: '', component: ProjectPageComponent },
  { path: 'edit', component: EditProjectPageComponent },
  { path: 'add', component: AddProjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
