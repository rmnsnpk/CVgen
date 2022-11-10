import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICoreState, updateCoreReducer } from './core.reducers';
import { employeeReducer, IEmployeesState } from './employee.reducers';
import { IProjectRolesState, projectRolesReducer } from './project-roles.reducers';
import { IProjectsState, projectsReducer } from './projects.reducers';
import { IResponsibilitiesState, responsibilitiesReducer } from './responsibilities.reducers';
import { ISpecializationsState, specializationsReducer } from './specializations.reducers';

export interface IState {
  core: ICoreState;
  employees: IEmployeesState;
  projects: IProjectsState;
  specializations: ISpecializationsState;
  responsibilities: IResponsibilitiesState;
  projectRoles: IProjectRolesState;
}

export const reducers: ActionReducerMap<IState> = {
  core: updateCoreReducer,
  employees: employeeReducer,
  projects: projectsReducer,
  specializations: specializationsReducer,
  responsibilities: responsibilitiesReducer,
  projectRoles: projectRolesReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
