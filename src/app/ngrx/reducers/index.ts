import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICoreState, updateCoreReducer } from './core.reducers';
import { employeeReducer, IEmployeesState } from './employee.reducers';

export interface IState {
  core: ICoreState;
  employees: IEmployeesState;
}

export const reducers: ActionReducerMap<IState> = {
  core: updateCoreReducer,
  employees: employeeReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
