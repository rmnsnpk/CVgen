import { createAction, props } from '@ngrx/store';
import { IProject, ISelectedProject } from 'src/app/shared/interfaces/projects.interface';

export const getProjects = createAction('[PROJECTS] Load Projects');

export const getProjectsSuccess = createAction('[PROJECTS] Load Projects Success', props<{ projects: IProject[] }>());

export const getProjectsFailure = createAction('[PROJECTS] Load Projects Failure', props<{ error: string }>());

export const createProject = createAction('[PROJECTS] Create Projects', props<{ project: IProject }>());

export const createProjectSuccess = createAction('[PROJECTS] Create Projects Success', props<{ project: IProject }>());

export const createProjectFailure = createAction('[PROJECTS] Create Projects Failure', props<{ error: string }>());

export const getSelectedProject = createAction('[PROJECTS] Get Selected Project', props<{ id: string }>());

export const getSelectedProjectSuccess = createAction('[PROJECTS] Get Selected Project Success', props<{ project: ISelectedProject }>());

export const getSelectedProjectFailure = createAction('[PROJECTS] Get Selected Project Failure', props<{ error: string }>());

export const deleteSelectedProject = createAction('[PROJECTS] Delete Selected Project Failure');

export const updateSelectedProject = createAction('[PROJECTS] Update Selected Project', props<{ project: ISelectedProject }>());

export const updateSelectedProjectSuccess = createAction('[PROJECTS] Get Selected Project Success', props<{ project: IProject }>());

export const updateSelectedProjectFailure = createAction('[PROJECTS] Get Selected Project Failure', props<{ error: string }>());
