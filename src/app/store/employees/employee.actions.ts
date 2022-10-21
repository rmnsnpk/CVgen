import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction('[Employee Page] Load Employees');

export const loadEmployeesSuccess = createAction('[Employee API] Employees Load Success', props<{ employees: any }>());

export const loadEmployeesFailure = createAction('[Employee Api] Employees Load Failure', props<{ error: string }>());
