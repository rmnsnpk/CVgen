import { IBreadcrumb } from '../interfaces/breadcrumbs';

export const HOME_BREADCRUMB: IBreadcrumb[] = [{ name: 'MAIN.SUBHEADER.NAMES.HOME' }];

export const EMPLOYEES_BREADCRUMB: IBreadcrumb[] = [
  ...HOME_BREADCRUMB,
  {
    url: '/employee',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES',
  },
];

export const EMPLOYEES_ADD_BREADCRUMB: IBreadcrumb[] = [
  ...EMPLOYEES_BREADCRUMB,
  {
    url: '/employee/add',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES_ADD',
  },
];

export const PROJECTS_BREADCRUMB: IBreadcrumb[] = [
  ...HOME_BREADCRUMB,
  {
    url: '/projects',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS',
  },
];

export const PROJECTS_ADD_BREADCRUMB: IBreadcrumb[] = [
  ...PROJECTS_BREADCRUMB,
  {
    url: '/projects/add',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS_ADD',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS_ADD',
  },
];
