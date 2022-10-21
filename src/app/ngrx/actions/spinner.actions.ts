import { createAction } from '@ngrx/store';

export const increaseRequestsCount = createAction('[increase] Increase requests counter');
export const decreaseRequestsCount = createAction('[decrease] Decrease requests counter');
