import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/breadcrumbs.actions';

import { PROJECTS_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';

@Component({
  selector: 'cvg-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent implements OnInit {
  constructor(private store: Store, private pr: ProjectsApiService) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: PROJECTS_BREADCRUMB }));
    this.pr.getProjects();
  }
}
