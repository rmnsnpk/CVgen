import { createReducer, on } from '@ngrx/store';
import { loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';

export interface IEmployeesState {
  employees: any;
}

export const initialState: IEmployeesState = {
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
