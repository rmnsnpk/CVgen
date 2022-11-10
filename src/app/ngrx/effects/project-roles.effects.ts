import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProjectRolesApiService } from 'src/app/shared/services/api/prject-roles.api.services';
import { loadProjectRoles, loadProjectRolesFailure, loadProjectRolesSuccess } from '../actions/project-roles.actions';

@Injectable()
export class ProjectRolesEffects {
  constructor(private actions$: Actions, private projectRolesApiService: ProjectRolesApiService) {}

  loadProjectRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjectRoles),
      switchMap(() =>
        this.projectRolesApiService.loadProjectRoles().pipe(
          map((projectRoles) => loadProjectRolesSuccess({ projectRoles })),
          catchError((error) => of(loadProjectRolesFailure({ error }))),
        ),
      ),
    ),
  );
}
