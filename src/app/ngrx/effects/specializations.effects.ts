import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { SpecializationsApiService } from 'src/app/shared/services/api/specializations.api.service';
import { loadSpecializations, loadSpecializationsFailure, loadSpecializationsSuccess } from '../actions/specializations.actions';

@Injectable()
export class SpecializationsEffects {
  constructor(private actions$: Actions, private specializationsApiService: SpecializationsApiService) {}

  loadSpecializations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpecializations),
      switchMap(() =>
        this.specializationsApiService.loadSpecializations().pipe(
          map((specializations) => loadSpecializationsSuccess({ specializations })),
          catchError((error) => of(loadSpecializationsFailure({ error }))),
        ),
      ),
    ),
  );
}
