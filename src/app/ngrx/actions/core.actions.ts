import { createAction, props } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';

export const updateBreadcrumbsAction = createAction('[CORE] Update breadcrumbs', props<{ breadcrumbsUpdate: Breadcrumb[] }>());
export const increaseRequestsCount = createAction('[CORE] Increase requests counter');
export const decreaseRequestsCount = createAction('[CORE] Decrease requests counter');
