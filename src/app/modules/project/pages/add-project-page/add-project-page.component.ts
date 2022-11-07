import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/core.actions';
import { createProject } from 'src/app/ngrx/actions/projects.actions';
import { spinnerSelector } from 'src/app/ngrx/selectors/core.selectors';
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

  onSaveInvalid = false;

  projectsPath = PROJECTS_PATH;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: PROJECTS_ADD_BREADCRUMB }));
  }

  save() {
    if (this.projectsForm.invalid) {
      this.projectsForm.markAsTouched();
      return;
    }
    this.store.dispatch(createProject(this.projectsForm.value));
    this.store
      .select(spinnerSelector)
      .pipe(untilDestroyed(this))
      .subscribe((counter) => {
        if (!counter) {
          this.router.navigate([PROJECTS_PATH.fullpath]);
        }
      });
  }
}
