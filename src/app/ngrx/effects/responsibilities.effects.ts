import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ResponsibilitiesApiService } from 'src/app/shared/services/api/responsibilities.api.service';
import { loadResponsibilities, loadResponsibilitiesFailure, loadResponsibilitiesSuccess } from '../actions/responsibilities.actions';

@Injectable()
export class ResponsibilitiesEffects {
  constructor(private actions$: Actions, private responsibilitiesApiService: ResponsibilitiesApiService) {}

  loadResponsibilities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadResponsibilities),
      switchMap(() =>
        this.responsibilitiesApiService.loadResponsibilities().pipe(
          map((responsibilities) => loadResponsibilitiesSuccess({ responsibilities })),
          catchError((error) => of(loadResponsibilitiesFailure({ error }))),
        ),
      ),
    ),
  );
}
