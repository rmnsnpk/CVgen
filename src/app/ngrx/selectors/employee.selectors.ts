import { createSelector } from '@ngrx/store';
import { IState } from '../reducers';
import { IEmployeesState } from '../reducers/employee.reducers';

export const selectEmployees = (state: IState) => state.employees;
export const selectAllEmployees = createSelector(selectEmployees, (state: IEmployeesState) => state.employees);
