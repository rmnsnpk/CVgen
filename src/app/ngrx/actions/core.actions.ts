import { createAction, props } from '@ngrx/store';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs';

export const updateBreadcrumbsAction = createAction('[CORE] Update breadcrumbs', props<{ breadcrumbsUpdate: IBreadcrumb[] }>());

export const increaseRequestsCount = createAction('[CORE] Increase requests counter');

export const decreaseRequestsCount = createAction('[CORE] Decrease requests counter');
