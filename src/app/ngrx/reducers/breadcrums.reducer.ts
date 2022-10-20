import { createReducer, on } from '@ngrx/store';
import { INITIAL_BREADCRUMBS_STATE } from 'src/app/shared/constants/store.constans';
import { updateBreadcrumbsAction } from '../actions/breadcrumbs.actions';

export const updateBreadcrumbsReducer = createReducer(
  INITIAL_BREADCRUMBS_STATE,
  on(updateBreadcrumbsAction, (state, action) => ({
    ...state,
    currentBreadcrumbs: action.breadcrumbsUpdate,
  })),
);
