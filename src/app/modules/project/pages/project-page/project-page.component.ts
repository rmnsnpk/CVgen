import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/core.actions';
import { getProjects } from 'src/app/ngrx/actions/projects.actions';
import { allProjectsSelector } from 'src/app/ngrx/selectors/projects.selectors';
import { PROJECTS_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { PROJECTS_ADD_PATH, PROJECTS_EDIT_PATH, PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { PROJECTS_TABLE_COLUMNS } from '../../constants/project-table-coloms.conts';

@UntilDestroy()
@Component({
  selector: 'cvg-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent implements OnInit {
  constructor(private store: Store, private router: Router, private cdr: ChangeDetectorRef) {}

  public readonly columns = PROJECTS_TABLE_COLUMNS;

  public projects: IProject[];

  ngOnInit(): void {
    this.store.dispatch(getProjects());
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: PROJECTS_BREADCRUMB }));
    this.store
      .select(allProjectsSelector)
      .pipe(untilDestroyed(this))
      .subscribe((projects) => {
        this.cdr.markForCheck();
        this.projects = projects;
      });
  }

  openCreateProject() {
    this.router.navigate([PROJECTS_PATH.path, PROJECTS_ADD_PATH.path]);
  }

  openEditProject(id: string) {
    this.router.navigate([PROJECTS_PATH.fullpath, PROJECTS_EDIT_PATH.name, id]);
  }
}
