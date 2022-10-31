import { createAction, props } from '@ngrx/store';

export const loadRoles = createAction('[ROLES] Load Roles');

export const loadRolesSuccess = createAction('[ROLES] Load Roles Success', props<{ roles: any }>());

export const loadRolesFailure = createAction('[ROLES] Load Roles Failure', props<{ error: string }>());
