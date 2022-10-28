import { createReducer, on } from '@ngrx/store';
import { loadSkillsFailure, loadSkillsSuccess } from '../actions/skills.actions';
export interface ISkillsState {
  skills: any;
}

const initialState: ISkillsState = {
  skills: [],
};

export const skillsReducer = createReducer(
  initialState,

  on(loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills: skills,
  })),
  on(loadSkillsFailure, (state) => ({
    ...state,
  })),
);
