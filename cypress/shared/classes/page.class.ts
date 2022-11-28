import { CORRECT_LOGIN_FIELDS, INPUT_CONTROL, SUBMIT_BUTTON } from '../constants/auth.consts';
import { AUTH_URL } from '../constants/routing.consts';

export class Page {
  enterLoginData(login = CORRECT_LOGIN_FIELDS.login, password = CORRECT_LOGIN_FIELDS.password) {
    cy.visit(AUTH_URL.path);
    cy.get(INPUT_CONTROL + ':first').type(login);
    cy.get(INPUT_CONTROL + ':last').type(password);
  }

  login(login = CORRECT_LOGIN_FIELDS.login, password = CORRECT_LOGIN_FIELDS.password) {
    this.enterLoginData(login, password);
    cy.intercept('https://innowise-cv-generator.herokuapp.com/auth/login').as('apiLogin');
    cy.get(SUBMIT_BUTTON).click();
  }

  openEmployees() {
    this.login(CORRECT_LOGIN_FIELDS.login, CORRECT_LOGIN_FIELDS.password);
    cy.wait('@apiLogin');
    cy.get('li:first').click();
  }

  openProjects() {
    this.login(CORRECT_LOGIN_FIELDS.login, CORRECT_LOGIN_FIELDS.password);
    cy.wait('@apiLogin');
    cy.get('li:last').click();
  }

  openProjectsAdd() {
    this.openProjects();
    cy.get('cvg-project-page .btn').click();
  }

  openProjectsEdit() {
    this.openProjects();
    cy.get('tbody tr:nth-child(2)').click();
  }
}
