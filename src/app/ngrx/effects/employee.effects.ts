import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../shared/services/api/employee.api.service';
import {
  createEmployee,
  createEmployeeFailure,
  createEmployeeSuccess,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadSelectedEmployee,
  loadSelectedEmployeeSuccess,
  updateEmployeeFailure,
  updateEmployeeSuccess,
  updateEmployee,
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
      switchMap((id) =>
        this.employeeApiService.loadSelectedEmployee(id.selectedEmployee).pipe(
          map((selectedEmployee: any) => loadSelectedEmployeeSuccess({ selectedEmployee })),
          catchError((error) => of(loadEmployeesFailure({ error }))),
        ),
      ),
    ),
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployee),
      switchMap((data: any) =>
        this.employeeApiService.postEmployee(data).pipe(
          map((employee) => createEmployeeSuccess({ employee })),
          catchError((error) => of(createEmployeeFailure({ error }))),
        ),
      ),
    ),
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      switchMap((data) =>
        this.employeeApiService.updateEmployee(data).pipe(
          map((employee) => updateEmployeeSuccess({ employee })),
          catchError((error) => of(updateEmployeeFailure({ error }))),
        ),
      ),
    ),
  );
}
