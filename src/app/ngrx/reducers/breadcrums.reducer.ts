import { createReducer, on } from '@ngrx/store';
import { BreadcrumbsState } from '.';
import { updateBreadcrumbsAction } from '../actions/breadcrumbs.actions';

export const INITIAL_BREADCRUMBS_STATE: BreadcrumbsState = {
  currentBreadcrumbs: [],
};

export const updateBreadcrumbsReducer = createReducer(
  INITIAL_BREADCRUMBS_STATE,
  on(updateBreadcrumbsAction, (state, action) => ({
    ...state,
    currentBreadcrumbs: action.breadcrumbsUpdate,
  })),
);
