import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as lodash from 'lodash';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/core.actions';
import {
  deleteSelectedProject,
  getSelectedProject,
  updateSelectedProject,
  updateSelectedProjectSuccess,
} from 'src/app/ngrx/actions/projects.actions';
import { selectedProjectSelector } from 'src/app/ngrx/selectors/projects.selectors';
import { PROJECTS_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
import { PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { ISelectedProject } from 'src/app/shared/interfaces/projects.interface';

@UntilDestroy()
@Component({
  selector: 'cvg-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styleUrls: ['./edit-project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProjectPageComponent implements OnInit, OnDestroy {
  projectsForm = new FormControl();

  projectsPath = PROJECTS_PATH;

  id: string;

  initialProjectValue: ISelectedProject;

  isSaveDisabled = false;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private actions: Actions) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSelectedProject();
    this.projectsForm.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      this.isSaveDisabled = lodash.isEqual(this.initialProjectValue, { ...this.projectsForm.value, id: this.id });
    });
  }

  ngOnDestroy() {
    this.store.dispatch(deleteSelectedProject());
  }

  getSelectedProject() {
    this.store.dispatch(getSelectedProject({ id: this.id }));
    this.store
      .select(selectedProjectSelector)
      .pipe(untilDestroyed(this))
      .subscribe((project) => {
        if (project) {
          this.initialProjectValue = project;
          this.projectsForm.patchValue(project);
          this.store.dispatch(
            updateBreadcrumbsAction({
              breadcrumbsUpdate: [
                ...PROJECTS_BREADCRUMB,
                {
                  label: 'MAIN.SUBHEADER.LABELS.PROJECTS_EDIT',
                  name: project.name,
                  description: project.description,
                },
              ],
            }),
          );
        }
      });
  }

  save() {
    if (this.projectsForm.invalid) {
      this.projectsForm.markAsTouched();
      return;
    }
    this.store.dispatch(updateSelectedProject({ project: { ...this.projectsForm.value, id: this.id } }));
    this.actions
      .pipe(untilDestroyed(this), ofType(updateSelectedProjectSuccess))
      .subscribe(() => this.router.navigate([PROJECTS_PATH.fullpath]));
  }
}
