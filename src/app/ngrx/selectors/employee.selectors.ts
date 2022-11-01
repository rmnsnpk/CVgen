import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeesState } from '../reducers/employee.reducers';

export const employeeFeatureSelector = createFeatureSelector<IEmployeesState>('employees');

export const allEmployeesSelector = createSelector(employeeFeatureSelector, (state: IEmployeesState) => state.employees);

export const getSelectedEmployeeSelector = createSelector(employeeFeatureSelector, (state: IEmployeesState) => state.selectedEmployee);
