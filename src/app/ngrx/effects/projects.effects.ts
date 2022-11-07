import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
  getSelectedProject,
  getSelectedProjectFailure,
  getSelectedProjectSuccess,
  getProjects,
  getProjectsFailure,
  getProjectsSuccess,
  updateSelectedProject,
  updateSelectedProjectSuccess,
  updateSelectedProjectFailure,
} from '../actions/projects.actions';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private projectsApiService: ProjectsApiService) {}

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjects),
      switchMap(() =>
        this.projectsApiService.getProjects().pipe(
          map((projects) => getProjectsSuccess({ projects })),
          catchError((error) => {
            return of(getProjectsFailure({ error }));
          }),
        ),
      ),
    ),
  );

  createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProject),
      switchMap((project) => {
        return this.projectsApiService.createProject(project).pipe(
          map((projectSuccess) => createProjectSuccess({ project: projectSuccess })),
          catchError((error) => {
            return of(createProjectFailure({ error }));
          }),
        );
      }),
    ),
  );

  getSelectedProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSelectedProject),
      switchMap((action) => {
        return this.projectsApiService.getProjectById(action.id).pipe(
          map((project) => getSelectedProjectSuccess({ project })),
          catchError((error) => {
            return of(getSelectedProjectFailure({ error }));
          }),
        );
      }),
    ),
  );

  updateSelectedProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSelectedProject),
      switchMap((action) => {
        console.log('eff', action.project);
        return this.projectsApiService.updateProject(action.project).pipe(
          map((project) => updateSelectedProjectSuccess({ project })),
          catchError((error) => {
            return of(updateSelectedProjectFailure(error));
          }),
        );
      }),
    ),
  );
}
