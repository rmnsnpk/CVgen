import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRolesState } from '../reducers/roles.reducer';

export const rolesFeatureSelector = createFeatureSelector<IRolesState>('roles');

export const allRolesSelector = createSelector(rolesFeatureSelector, (state: IRolesState) => state.roles);
