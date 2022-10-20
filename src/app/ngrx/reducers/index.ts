import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { BreadcrumbsState } from 'src/app/shared/interfaces/store.interfaces';
import { environment } from 'src/environments/environment';
import { updateBreadcrumbsReducer } from './breadcrums.reducer';

export interface State {
  breadcrumbs: BreadcrumbsState;
}

export const reducers: ActionReducerMap<State> = {
  breadcrumbs: updateBreadcrumbsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
