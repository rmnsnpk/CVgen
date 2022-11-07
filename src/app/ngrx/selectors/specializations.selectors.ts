import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISpecializationsState } from '../reducers/specializations.reducers';

export const specializationsFeatureSelector = createFeatureSelector<ISpecializationsState>('specializations');

export const allSpecializationsSelector = createSelector(
  specializationsFeatureSelector,
  (state: ISpecializationsState) => state.specializations,
);
