import { createAction, props } from '@ngrx/store';
import { Breadcrumbs } from 'src/app/shared/interfaces/breadcrumbs';

export const updateBreadcrumbsAction = createAction('[UPDATE] Update breadcrumbs', props<{ breadcrumbsUpdate: Breadcrumbs[] }>());
