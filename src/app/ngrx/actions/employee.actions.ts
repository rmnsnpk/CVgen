import { createAction, props } from '@ngrx/store';
import { IEmployee, ISelectedEmployee } from 'src/app/shared/interfaces/employees.interface';

export const loadEmployees = createAction('[EMPLOYEES] Load Employees');

export const loadEmployeesSuccess = createAction('[EMPLOYEES] Load Employees Success', props<{ employees: IEmployee }>());

export const loadEmployeesFailure = createAction('[EMPLOYEES] Load Employees Failure', props<{ error: string }>());

export const createEmployee = createAction('[EMPLOYEES] Create Employees', props<{ employee: IEmployee }>());

export const createEmployeeSuccess = createAction('[EMPLOYEES] Create Employees Success', props<{ employee: IEmployee }>());

export const createEmployeeFailure = createAction('[EMPLOYEES] Create Employees Failure', props<{ error: string }>());

export const updateEmployee = createAction('[EMPLOYEES] Update Employees', props<{ employee: IEmployee }>());

export const updateEmployeeSuccess = createAction('[EMPLOYEES] Update Employees Success', props<{ employee: IEmployee }>());

export const updateEmployeeFailure = createAction('[EMPLOYEES] Update Employees Failure', props<{ error: string }>());

export const loadSelectedEmployee = createAction('[EMPLOYEES] Load Selected Employee', props<{ selectedEmployee: any }>());

export const loadSelectedEmployeeSuccess = createAction(
  '[EMPLOYEES] Load Selected Employees Success',
  props<{ selectedEmployee: ISelectedEmployee }>(),
);

export const loadSelectedEmployeeFailure = createAction('[EMPLOYEES] Load Selected Employees Failure', props<{ error: string }>());

export const deleteSelectedEmployee = createAction('[EMPLOYEES] Delete Selected Employees');
