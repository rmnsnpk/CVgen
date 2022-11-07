import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResponsibilitiesState } from '../reducers/responsibilities.reducers';

export const responsibilitiesFeatureSelector = createFeatureSelector<IResponsibilitiesState>('responsibilities');

export const allResponsibilitiesSelector = createSelector(
  responsibilitiesFeatureSelector,
  (state: IResponsibilitiesState) => state.responsibilities,
);
