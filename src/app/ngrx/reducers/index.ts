import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { updateBreadcrumbsReducer } from './breadcrums.reducer';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';
import { updateRequestsCounter } from './spinner.reducers';

export interface State {
  breadcrumbs: BreadcrumbsState;
  spinner: SpinnerState;
}

export interface BreadcrumbsState {
  currentBreadcrumbs: Breadcrumb[];
}
export interface SpinnerState {
  requestsCount: number;
}

export const reducers: ActionReducerMap<State> = {
  breadcrumbs: updateBreadcrumbsReducer,
  spinner: updateRequestsCounter,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
