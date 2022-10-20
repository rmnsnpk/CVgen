import { Breadcrumbs } from '../interfaces/breadcrumbs';

const HOME_BREADCRUMB: Breadcrumbs = {
  url: '/',
  name: 'MAIN.SUBHEADER.NAMES.HOME',
};

export const EMPLOYEES: Breadcrumbs[] = [
  HOME_BREADCRUMB,
  {
    url: '/employee',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES',
  },
];

export const EMPLOYEES_ADD: Breadcrumbs[] = [
  ...EMPLOYEES,
  {
    url: '/employee/add',
    label: 'MAIN.SUBHEADER.LABELS.EMPLOYEES',
    name: 'MAIN.SUBHEADER.NAMES.EMPLOYEES_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.EMPLOYEES_ADD',
  },
];

export const PROJECTS: Breadcrumbs[] = [
  HOME_BREADCRUMB,
  {
    url: '/projects',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS',
  },
];

export const PROJECTS_ADD: Breadcrumbs[] = [
  ...PROJECTS,
  {
    url: '/projects/add',
    label: 'MAIN.SUBHEADER.LABELS.PROJECTS',
    name: 'MAIN.SUBHEADER.NAMES.PROJECTS_ADD',
    description: 'MAIN.SUBHEADER.DESCRIPTIONS.PROJECTS_ADD',
  },
];
