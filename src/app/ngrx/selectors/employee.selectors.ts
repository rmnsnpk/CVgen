import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeesState } from '../reducers/employee.reducers';

export const employeeSelector = createFeatureSelector<IEmployeesState>('employees');

export const allEmmployeesSelector = createSelector(employeeSelector, (state: IEmployeesState) => state.employees);
