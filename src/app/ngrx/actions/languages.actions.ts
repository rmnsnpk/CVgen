import { createAction, props } from '@ngrx/store';

export const loadLanguages = createAction('[LANGUAGES] Load Languages');

export const loadLanguagesSuccess = createAction('[LANGUAGES] Load Languages Success', props<{ languages: any }>());

export const loadLanguagesFailure = createAction('[LANGUAGES] Load Languages Failure', props<{ error: string }>());
