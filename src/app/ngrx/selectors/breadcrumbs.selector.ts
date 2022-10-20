import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreadcrumbsState } from 'src/app/shared/interfaces/store.interfaces';

export const breadcrumbsFeatureSelector = createFeatureSelector<BreadcrumbsState>('breadcrumbs');

export const breadcrumbsSelector = createSelector(breadcrumbsFeatureSelector, (state: any) => state?.currentBreadcrumbs);
