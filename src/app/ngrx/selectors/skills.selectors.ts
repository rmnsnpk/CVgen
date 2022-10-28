import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISkillsState } from '../reducers/skills.reducers';

export const skillsFeatureSelector = createFeatureSelector<ISkillsState>('skills');

export const allSkillsSelector = createSelector(skillsFeatureSelector, (state: ISkillsState) => state.skills);
