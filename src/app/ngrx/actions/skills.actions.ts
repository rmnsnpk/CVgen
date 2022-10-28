import { createAction, props } from '@ngrx/store';

export const loadSkills = createAction('[SKILLS] Load Skills');

export const loadSkillsSuccess = createAction('[SKILLS] Load Skills Success', props<{ skills: any }>());

export const loadSkillsFailure = createAction('[SKILLS] Load Skills Failure', props<{ error: string }>());
