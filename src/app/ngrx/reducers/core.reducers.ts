import { createReducer, on } from '@ngrx/store';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs';
import { decreaseRequestsCount, increaseRequestsCount, updateBreadcrumbsAction } from '../actions/core.actions';
import { HOME_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';

export interface ICoreState {
  currentBreadcrumbs: IBreadcrumb[];
  requestsCount: number;
}

const initialState: ICoreState = {
  currentBreadcrumbs: [...HOME_BREADCRUMB],
  requestsCount: 0,
};

export const updateCoreReducer = createReducer(
  initialState,
  on(updateBreadcrumbsAction, (state, action) => ({
    ...state,
    currentBreadcrumbs: action.breadcrumbsUpdate,
  })),
  on(increaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount + 1,
  })),
  on(decreaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount - 1,
  })),
);
