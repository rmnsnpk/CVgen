import { createAction, props } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';

export const updateBreadcrumbsAction = createAction('[UPDATE] Update breadcrumbs', props<{ breadcrumbsUpdate: Breadcrumb[] }>());
