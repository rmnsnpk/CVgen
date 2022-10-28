import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { SkillsApiService } from 'src/app/shared/services/api/skills.api.service';
import { loadSkills, loadSkillsFailure, loadSkillsSuccess } from '../actions/skills.actions';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private store: Store, private skillsApiService: SkillsApiService) {}

  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSkills),
      switchMap(() =>
        this.skillsApiService.loadSkills().pipe(
          map((skills) => loadSkillsSuccess({ skills })),
          catchError((error) => of(loadSkillsFailure({ error }))),
        ),
      ),
    ),
  );
}
