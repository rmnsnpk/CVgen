import { createReducer, on } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';
import { decreaseRequestsCount, increaseRequestsCount, updateBreadcrumbsAction } from '../actions/core.actions';

export interface CoreState {
  currentBreadcrumbs: Breadcrumb[];
  requestsCount: number;
}

const initialState: CoreState = {
  currentBreadcrumbs: [],
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
