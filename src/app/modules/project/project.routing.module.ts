import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './pages/edit-project-page/edit-project-page.component';
import { PROJECTS_ADD_PATH, PROJECTS_EDIT_PATH } from 'src/app/shared/constants/routing-paths.consts';

const routes: Routes = [
  { path: '', component: ProjectPageComponent },
  { path: PROJECTS_EDIT_PATH.path, component: EditProjectPageComponent },
  { path: PROJECTS_ADD_PATH.path, component: AddProjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
