import { createAction, props } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';

export const loadProjectRoles = createAction('[PROJECTS] Load Project Roles');

export const loadProjectRolesSuccess = createAction('[PROJECTS] Load Project Roles Success ', props<{ projectRoles: IListingData[] }>());

export const loadProjectRolesFailure = createAction('[PROJECTS] Load Project Roles Failure', props<{ error: string }>());
