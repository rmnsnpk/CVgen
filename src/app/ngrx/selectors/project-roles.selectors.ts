import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectRolesState } from '../reducers/project-roles.reducers';

export const projectRolesFeatureSelector = createFeatureSelector<IProjectRolesState>('projectRoles');

export const allProjectRolesSelector = createSelector(projectRolesFeatureSelector, (state: IProjectRolesState) => state.projectRoles);
