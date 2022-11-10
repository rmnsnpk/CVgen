import { createAction, props } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';

export const loadResponsibilities = createAction('[PROJECTS] Load Responsibilities');

export const loadResponsibilitiesSuccess = createAction(
  '[PROJECTS] Load Responsibilities Success ',
  props<{ responsibilities: IListingData[] }>(),
);

export const loadResponsibilitiesFailure = createAction('[PROJECTS] Load Responsibilities Failure', props<{ error: string }>());
