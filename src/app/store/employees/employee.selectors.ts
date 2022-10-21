import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EmployeesState } from './employee.reducers';

export const selectEmployees = (state: AppState) => state.employees;
export const selectAllEmployees = createSelector(selectEmployees, (state: EmployeesState) => state.employees);
