import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Employees Load Success', props<{ employees: any }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Employees Load Failure', props<{ error: string }>());
