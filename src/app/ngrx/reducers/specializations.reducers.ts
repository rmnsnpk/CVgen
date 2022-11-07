import { createReducer, on } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';
import { loadSpecializationsFailure, loadSpecializationsSuccess } from '../actions/specializations.actions';

export interface ISpecializationsState {
  specializations: IListingData[];
}

const initialState: ISpecializationsState = {
  specializations: [],
};

export const specializationsReducer = createReducer(
  initialState,
  on(loadSpecializationsSuccess, (state, action) => ({
    ...state,
    specializations: action.specializations,
  })),
  on(loadSpecializationsFailure, (state) => ({
    ...state,
  })),
);
