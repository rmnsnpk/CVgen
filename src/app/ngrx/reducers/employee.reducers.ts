import { createReducer, on } from '@ngrx/store';
import { loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';

export interface EmployeesState {
  employees: [];
}

export const initialState: EmployeesState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,

  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  })),
  on(loadEmployeesFailure, (state) => ({
    ...state,
  })),
);
