import { createReducer, on } from '@ngrx/store';
import { SpinnerState } from '.';
import { decreaseRequestsCount, increaseRequestsCount } from '../actions/spinner.actions';

export const INITIAL_SPINNER_STATE: SpinnerState = {
  requestsCount: 0,
};

export const updateRequestsCounter = createReducer(
  INITIAL_SPINNER_STATE,
  on(increaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount + 1,
  })),
  on(decreaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount - 1,
  })),
);
