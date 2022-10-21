import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { EmployeesState } from '../reducers/employee.reducers';

export const selectEmployees = (state: State) => state.employees;
export const selectAllEmployees = createSelector(selectEmployees, (state: EmployeesState) => state.employees);
