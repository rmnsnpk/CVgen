import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { LanguagesApiService } from 'src/app/shared/services/api/languages-api.service';
import { loadLanguages, loadLanguagesFailure, loadLanguagesSuccess } from '../actions/languages.actions';

@Injectable()
export class LanguagesEffects {
  constructor(private actions$: Actions, private store: Store, private languagesApiService: LanguagesApiService) {}

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLanguages),
      switchMap(() =>
        this.languagesApiService.loadLanguages().pipe(
          map((languages) => loadLanguagesSuccess({ languages })),
          catchError((error) => of(loadLanguagesFailure({ error }))),
        ),
      ),
    ),
  );
}
