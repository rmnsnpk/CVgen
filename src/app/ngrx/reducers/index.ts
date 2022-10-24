import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { updateBreadcrumbsReducer } from './breadcrums.reducer';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs';
import { employeeReducer, EmployeesState } from './employee.reducers';

export interface State {
  breadcrumbs: BreadcrumbsState;
  employees: EmployeesState;
}

export interface BreadcrumbsState {
  currentBreadcrumbs: IBreadcrumb[];
}

export const reducers: ActionReducerMap<State> = {
  breadcrumbs: updateBreadcrumbsReducer,
  employees: employeeReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
