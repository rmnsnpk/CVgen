import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICoreState, updateCoreReducer } from './core.reducers';
import { employeeReducer, IEmployeesState } from './employee.reducers';
import { IProjectsState, projectsReducer } from './projects.reducers';

export interface IState {
  core: ICoreState;
  employees: IEmployeesState;
  projects: IProjectsState;
}

export const reducers: ActionReducerMap<IState> = {
  core: updateCoreReducer,
  employees: employeeReducer,
  projects: projectsReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
