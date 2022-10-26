import { createReducer, on } from '@ngrx/store';
import { loadProjectsFailure, loadProjectsSuccess } from '../actions/projects.actions';

export interface IProjectsState {
  projects: any;
}

const initialState: IProjectsState = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialState,

  on(loadProjectsSuccess, (state, action) => ({
    ...state,
    projects: action.projects,
  })),
  on(loadProjectsFailure, (state) => ({
    ...state,
  })),
);
