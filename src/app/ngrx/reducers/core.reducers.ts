import { createReducer, on } from '@ngrx/store';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs';
import { decreaseRequestsCount, increaseRequestsCount, updateBreadcrumbsAction } from '../actions/core.actions';

export interface ICoreState {
  currentBreadcrumbs: IBreadcrumb[];
  requestsCount: number;
}

const initialState: ICoreState = {
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
