import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICoreState, updateCoreReducer } from './core.reducers';
import { employeeReducer, IEmployeesState } from './employee.reducers';
import { ILanguagesState, languagesReducer } from './languages.reducers';
import { IProjectsState, projectsReducer } from './projects.reducers';
import { ISkillsState, skillsReducer } from './skills.reducers';

export interface IState {
  core: ICoreState;
  employees: IEmployeesState;
  projects: IProjectsState;
  languages: ILanguagesState;
  skills: ISkillsState;
}

export const reducers: ActionReducerMap<IState> = {
  core: updateCoreReducer,
  employees: employeeReducer,
  projects: projectsReducer,
  languages: languagesReducer,
  skills: skillsReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
