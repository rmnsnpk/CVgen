import { Breadcrumbs } from '../interfaces/breadcrumbs';

const HOME_BREADCRUMB: Breadcrumbs = {
  name: 'MAIN.SUBHEADER.NAMES.HOME',
};

export const EMPLOYEES_BREADCRUMB: Breadcrumbs[] = [
  HOME_BREADCRUMB,
  {
    url: '/employee',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES',
  },
];

export const EMPLOYEES_ADD_BREADCRUMB: Breadcrumbs[] = [
  ...EMPLOYEES_BREADCRUMB,
  {
    url: '/employee/add',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES_ADD',
  },
];

export const PROJECTS_BREADCRUMB: Breadcrumbs[] = [
  HOME_BREADCRUMB,
  {
    url: '/projects',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS',
  },
];

export const PROJECTS_ADD_BREADCRUMB: Breadcrumbs[] = [
  ...PROJECTS_BREADCRUMB,
  {
    url: '/projects/add',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS_ADD',
  },
];
