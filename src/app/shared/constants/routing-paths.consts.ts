import { IRouteConfig } from '../interfaces/route-config.interface';

export const AUTH_PATH: IRouteConfig = {
  path: 'auth',
  fullpath: '/auth',
};

export const EMPLOYEE_PATH: IRouteConfig = {
  path: 'employee',
  fullpath: '/employee',
};

export const EMPLOYEE_EDIT_PATH: IRouteConfig = {
  path: 'edit/:id',
  fullpath: '/edit/:id',
  name: 'edit',
};

export const EMPLOYEE_ADD_PATH: IRouteConfig = {
  path: 'add',
  fullpath: '/add',
};

export const PROJECTS_PATH: IRouteConfig = {
  path: 'projects',
  fullpath: '/projects',
};

export const PROJECTS_EDIT_PATH: IRouteConfig = {
  path: 'edit/:id',
  fullpath: '/edit/:id',
  name: 'edit',
};

export const PROJECTS_ADD_PATH: IRouteConfig = {
  path: 'add',
  fullpath: '/add',
};
