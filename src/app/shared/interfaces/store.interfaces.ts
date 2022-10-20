import { Breadcrumbs } from './breadcrumbs';

export interface State {
  breadcrumbs: BreadcrumbsState;
}
export interface BreadcrumbsState {
  currentBreadcrumbs: Breadcrumbs[];
}
