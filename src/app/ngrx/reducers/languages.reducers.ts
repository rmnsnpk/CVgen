import { createReducer, on } from '@ngrx/store';
import { loadLanguagesSuccess, loadLanguagesFailure } from '../actions/languages.actions';

export interface ILanguagesState {
  languages: any;
}

const initialState: ILanguagesState = {
  languages: [],
};

export const languagesReducer = createReducer(
  initialState,

  on(loadLanguagesSuccess, (state, { languages }) => ({
    ...state,
    languages: languages,
  })),
  on(loadLanguagesFailure, (state) => ({
    ...state,
  })),
);
