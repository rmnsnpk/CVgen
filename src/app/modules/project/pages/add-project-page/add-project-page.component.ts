import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/core.actions';
import { createProject, createProjectSuccess } from 'src/app/ngrx/actions/projects.actions';
import { PROJECTS_ADD_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';

@Component({
  selector: 'cvg-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@UntilDestroy()
export class AddProjectPageComponent implements OnInit {
  projectsForm = new FormControl();

  projectsPath = PROJECTS_PATH;

  constructor(private store: Store, private router: Router, private actions: Actions) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: PROJECTS_ADD_BREADCRUMB }));
  }

  save() {
    if (this.projectsForm.invalid) {
      this.projectsForm.markAsTouched();
      return;
    }
    this.store.dispatch(createProject({ project: this.projectsForm.value }));

    this.actions.pipe(untilDestroyed(this), ofType(createProjectSuccess)).subscribe(() => this.router.navigate([PROJECTS_PATH.fullpath]));
  }
}
