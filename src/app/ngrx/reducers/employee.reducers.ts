import { createReducer, on } from '@ngrx/store';
import { ISelectedEmployee } from 'src/app/shared/interfaces/employees.interface';
import {
  deleteSelectedEmployee,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadSelectedEmployeeFailure,
  loadSelectedEmployeeSuccess,
} from '../actions/employee.actions';

export interface IEmployeesState {
  employees: any;
  selectedEmployee: ISelectedEmployee | null;
}

const initialState: IEmployeesState = {
  employees: [],
  selectedEmployee: null,
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
  on(deleteSelectedEmployee, (state) => ({
    ...state,
    selectedEmployee: null,
  })),
);
