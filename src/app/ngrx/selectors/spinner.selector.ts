import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpinnerState } from '../reducers';

export const spinnerFeatureSelector = createFeatureSelector<SpinnerState>('spinner');

export const spinnerSelector = createSelector(spinnerFeatureSelector, (state: any) => state?.requestsCount);
