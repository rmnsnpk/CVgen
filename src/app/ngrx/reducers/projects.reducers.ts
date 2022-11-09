import { createReducer, on } from '@ngrx/store';
import { IProject, ISelectedProject } from 'src/app/shared/interfaces/projects.interface';
import { createProjectSuccess, deleteSelectedProject, getProjectsSuccess, getSelectedProjectSuccess } from '../actions/projects.actions';

export interface IProjectsState {
  projects: IProject[];
  selectedProject: ISelectedProject;
}

const initialState: IProjectsState = {
  projects: [],
  selectedProject: null,
};

export const projectsReducer = createReducer(
  initialState,

  on(getProjectsSuccess, (state, action) => ({
    ...state,
    projects: action.projects,
  })),
  on(createProjectSuccess, (state, action) => ({
    ...state,
    projects: [...state.projects, action.project],
  })),
  on(getSelectedProjectSuccess, (state, action) => ({
    ...state,
    selectedProject: action.project,
  })),
  on(deleteSelectedProject, (state) => ({
    ...state,
    selectedProject: null,
  })),
);
