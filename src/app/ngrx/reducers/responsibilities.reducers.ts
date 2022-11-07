import { createReducer, on } from '@ngrx/store';
import { IListingData } from 'src/app/shared/interfaces/listing-data';
import { loadResponsibilitiesFailure, loadResponsibilitiesSuccess } from '../actions/responsibilities.actions';

export interface IResponsibilitiesState {
  responsibilities: IListingData[];
}

const initialState: IResponsibilitiesState = {
  responsibilities: [],
};

export const responsibilitiesReducer = createReducer(
  initialState,
  on(loadResponsibilitiesSuccess, (state, action) => ({
    ...state,
    responsibilities: action.responsibilities,
  })),
  on(loadResponsibilitiesFailure, (state) => ({
    ...state,
  })),
);
