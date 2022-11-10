import { createAction, props } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';

export const loadSpecializations = createAction('[PROJECTS] Load Specializations');

export const loadSpecializationsSuccess = createAction(
  '[PROJECTS] Load Specializations Success ',
  props<{ specializations: IListingData[] }>(),
);

export const loadSpecializationsFailure = createAction('[PROJECTS] Load Specializations Failure', props<{ error: string }>());
