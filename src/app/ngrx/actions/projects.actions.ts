import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction('[PROJECTS] Load Projects');

export const loadProjectsSuccess = createAction('[PROJECTS] Load Projects Success', props<{ projects: any }>());

export const loadProjectsFailure = createAction('[PROJECTS] Load Projects Failure', props<{ error: string }>());
