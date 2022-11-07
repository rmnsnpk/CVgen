import { createReducer, on } from '@ngrx/store';
import { IProject, ISelectedProject } from 'src/app/shared/interfaces/projects.interface';
import {
  createProjectFailure,
  createProjectSuccess,
  deleteSelectedProject,
  getSelectedProjectFailure,
  getSelectedProjectSuccess,
  getProjectsFailure,
  getProjectsSuccess,
} from '../actions/projects.actions';

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
  on(getProjectsFailure, (state) => ({
    ...state,
  })),
  on(createProjectSuccess, (state, action) => ({
    ...state,
    projects: [...state.projects, action.project],
  })),
  on(createProjectFailure, (state) => ({
    ...state,
  })),
  on(getSelectedProjectSuccess, (state, action) => ({
    ...state,
    selectedProject: action.project,
  })),
  on(getSelectedProjectFailure, (state) => ({
    ...state,
  })),
  on(deleteSelectedProject, (state) => ({
    ...state,
    selectedProject: null,
  })),
);
