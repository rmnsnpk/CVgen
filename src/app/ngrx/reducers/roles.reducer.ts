import { createReducer, on } from '@ngrx/store';
import { loadRolesSuccess, loadRolesFailure } from '../actions/roles.action';
export interface IRolesState {
  roles: any;
}

const initialState: IRolesState = {
  roles: [],
};

export const rolesReducer = createReducer(
  initialState,

  on(loadRolesSuccess, (state, { roles }) => ({
    ...state,
    roles: roles,
  })),
  on(loadRolesFailure, (state) => ({
    ...state,
  })),
);
