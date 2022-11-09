import { createReducer, on } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';
import { loadProjectRolesSuccess } from '../actions/project-roles.actions';

export interface IProjectRolesState {
  projectRoles: IListingData[];
}

const initialState: IProjectRolesState = {
  projectRoles: [],
};

export const projectRolesReducer = createReducer(
  initialState,
  on(loadProjectRolesSuccess, (state, action) => ({
    ...state,
    projectRoles: action.projectRoles,
  })),
);
