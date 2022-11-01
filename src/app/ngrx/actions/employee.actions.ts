import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Load Employees Success', props<{ employees: any }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Load Employees Failure', props<{ error: string }>());

export const createEmployee = createAction('[EMPLOYEES] Create Employees', props<{ employee: any }>());

export const createEmployeeSuccess = createAction('[EMPLOYEES] Create Employees Success', props<{ employee: any }>());

export const createEmployeeFailure = createAction('[EMPLOYEES] Create Employees Failure', props<{ error: string }>());

export const loadSelectedEmployee = createAction('[EMPLOYEES] Load Selected Employee', props<{ selectedEmployee: any }>());

export const loadSelectedEmployeeSuccess = createAction('[EMPLOYEES] Load Selected Employees Success', props<{ selectedEmployee: any }>());

export const loadSelectedEmployeeFailure = createAction('[EMPLOYEES] Load Selected Employees Failure', props<{ error: string }>());
