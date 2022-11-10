import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectsState } from '../reducers/projects.reducers';

export const projectsFeatureSelector = createFeatureSelector<IProjectsState>('projects');

export const allProjectsSelector = createSelector(projectsFeatureSelector, (state: IProjectsState) => state.projects);

export const selectedProjectSelector = createSelector(projectsFeatureSelector, (state: IProjectsState) => state.selectedProject);
