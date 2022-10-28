import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILanguagesState } from '../reducers/languages.reducers';

export const languagesFeatureSelector = createFeatureSelector<ILanguagesState>('languages');

export const allLanguagesSelector = createSelector(languagesFeatureSelector, (state: ILanguagesState) => state.languages);
