import { Page } from 'cypress/shared/classes/page.class';
import {
  AUTH_FORM_ERROR,
  INCORRECT_LOGIN_FIELDS,
  INPUT_CONTROL,
  INPUT_CONTROL_ERROR,
  SUBMIT_BUTTON,
} from 'cypress/shared/constants/auth.consts';
import { AUTH_URL, EMPLOYEE_URL } from 'cypress/shared/constants/routing.consts';

describe('Auth page', () => {
  let page = new Page();

  it('should show login errors and do not redirect', () => {
    page.enterLoginData();
    cy.get(INPUT_CONTROL + ':first')
      .clear()
      .children()
      .get(INPUT_CONTROL_ERROR)
      .should('be.visible');
    cy.get(SUBMIT_BUTTON).click();
    cy.url().should('eq', AUTH_URL.fullPath);
  });
  it('should show password errors and do not redirect', () => {
    page.enterLoginData();
    cy.get(INPUT_CONTROL + ':last')
      .clear()
      .children()
      .get(INPUT_CONTROL_ERROR)
      .should('be.visible');
    cy.get(SUBMIT_BUTTON).click();
    cy.url().should('eq', AUTH_URL.fullPath);
  });
  it('should show password errors and do not redirect', () => {
    page.enterLoginData();
    cy.get(INPUT_CONTROL + ':first')
      .clear()
      .children()
      .get(INPUT_CONTROL_ERROR)
      .should('be.visible');
    cy.get(INPUT_CONTROL + ':last')
      .clear()
      .children()
      .get(INPUT_CONTROL_ERROR)
      .should('be.visible');
    cy.get(SUBMIT_BUTTON).click();
    cy.url().should('eq', AUTH_URL.fullPath);
  });
  it('should show wrong password or login error', () => {
    page.login(INCORRECT_LOGIN_FIELDS.login, INCORRECT_LOGIN_FIELDS.password);
    cy.wait('@apiLogin');
    cy.get(AUTH_FORM_ERROR).should('be.visible');
  });
  it('should login', () => {
    page.login();
    cy.wait('@apiLogin');
    cy.url().should('eq', EMPLOYEE_URL.fullPath);
  });
});
