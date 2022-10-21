import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../shared/services/api/employee.api.service';
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from '../actions/employee.actions';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private store: Store, private employeeApiService: EmployeeApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        this.employeeApiService.loadEmployees().pipe(
          map((employees) => loadEmployeesSuccess({ employees: employees })),
          catchError((error) => of(loadEmployeesFailure({ error }))),
        ),
      ),
    ),
  );
}
