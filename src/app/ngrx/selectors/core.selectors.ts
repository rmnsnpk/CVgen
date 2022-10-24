import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from '../reducers/core.reducers';

export const coreFeatureSelector = createFeatureSelector<CoreState>('core');

export const breadcrumbsSelector = createSelector(coreFeatureSelector, (state: any) => state?.currentBreadcrumbs);

export const spinnerSelector = createSelector(coreFeatureSelector, (state: any) => state?.requestsCount);
