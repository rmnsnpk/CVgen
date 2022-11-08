import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../shared/services/api/employee.api.service';
import {
  createCvFailure,
  createCvSuccess,
  createEmployee,
  createEmployeeFailure,
  createEmployeeSuccess,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadSelectedEmployee,
  loadSelectedEmployeeSuccess,
  updateEmployee,
  updateEmployeeFailure,
  updateEmployeeSuccess,
} from '../actions/employee.actions';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private store: Store, private employeeApiService: EmployeeApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        this.employeeApiService.loadEmployees().pipe(
          map((employees: any) => loadEmployeesSuccess({ employees })),
          catchError((error) => of(loadEmployeesFailure({ error }))),
        ),
      ),
    ),
  );

  loadSelectedEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSelectedEmployee),
      switchMap((action) =>
        this.employeeApiService.loadSelectedEmployee(action.selectedEmployee).pipe(
          map((selectedEmployee: any) => loadSelectedEmployeeSuccess({ selectedEmployee })),
          catchError((error) => of(loadEmployeesFailure({ error }))),
        ),
      ),
    ),
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployee),
      switchMap((action) =>
        this.employeeApiService.postEmployee(action.employee).pipe(
          map((employee) => createEmployeeSuccess({ employee })),
          catchError((error) => of(createEmployeeFailure({ error }))),
        ),
      ),
    ),
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap((action) =>
        this.employeeApiService.updateEmployee(action.employee).pipe(
          map((employee) => updateEmployeeSuccess({ employee })),
          catchError((error) => of(updateEmployeeFailure({ error }))),
        ),
      ),
    ),
  );

  createCv$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeSuccess),
      switchMap((action) =>
        this.employeeApiService.createCv(action.employee).pipe(
          map((cv) => createCvSuccess({ cv })),
          catchError((error) => of(createCvFailure({ error }))),
        ),
      ),
    ),
  );
}
