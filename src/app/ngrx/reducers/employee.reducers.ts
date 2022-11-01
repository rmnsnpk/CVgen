import { createReducer, on } from '@ngrx/store';
import {
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadSelectedEmployeeSuccess,
  loadSelectedEmployeeFailure,
} from '../actions/employee.actions';

export interface IEmployeesState {
  employees: any;
  selectedEmployee: any;
}

const initialState: IEmployeesState = {
  employees: [],
  selectedEmployee: [],
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
  on(loadSelectedEmployeeSuccess, (state, { selectedEmployee }) => ({
    ...state,
    selectedEmployee: selectedEmployee,
  })),
  on(loadSelectedEmployeeFailure, (state) => ({
    ...state,
  })),
);
