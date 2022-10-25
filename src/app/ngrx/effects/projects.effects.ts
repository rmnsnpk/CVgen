import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { loadProjects, loadProjectsFailure, loadProjectsSuccess } from '../actions/projects.actions';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private store: Store, private projectsApiService: ProjectsApiService) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProjects),
      switchMap(() =>
        this.projectsApiService.loadProjects().pipe(
          map((projects) => loadProjectsSuccess({ projects })),
          catchError((error) => {
            return of(loadProjectsFailure({ error }));
          }),
        ),
      ),
    ),
  );
}
