import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { updateBreadcrumbsReducer } from './breadcrums.reducer';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';

export interface State {
  breadcrumbs: BreadcrumbsState;
}

export interface BreadcrumbsState {
  currentBreadcrumbs: Breadcrumb[];
}

export const reducers: ActionReducerMap<State> = {
  breadcrumbs: updateBreadcrumbsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
