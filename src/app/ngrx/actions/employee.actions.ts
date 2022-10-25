import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Load Employees Success', props<{ employees: any }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Load Employees Failure', props<{ error: string }>());
