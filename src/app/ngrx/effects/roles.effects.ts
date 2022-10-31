import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { RolesApiService } from 'src/app/shared/services/api/roles-api.service';
import { loadRolesFailure, loadRolesSuccess, loadRoles } from '../actions/roles.action';

@Injectable()
export class RolesEffects {
  constructor(private actions$: Actions, private store: Store, private rolesApiService: RolesApiService) {}

  loadRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoles),
      switchMap(() =>
        this.rolesApiService.loadRoles().pipe(
          map((roles) => loadRolesSuccess({ roles })),
          catchError((error) => {
            return of(loadRolesFailure({ error }));
          }),
        ),
      ),
    ),
  );
}
