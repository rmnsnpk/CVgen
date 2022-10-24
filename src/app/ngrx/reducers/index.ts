import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { CoreState, updateCoreReducer } from './core.reducers';

export interface State {
  core: CoreState;
}

export const reducers: ActionReducerMap<State> = {
  core: updateCoreReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
