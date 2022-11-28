import { Page } from 'cypress/shared/classes/page.class';
import { BREADCRUMBS, MENU_BUTTON, MENU_LIST } from 'cypress/shared/constants/main.consts';
import { EMPLOYEE_URL, PROJECTS_URL } from 'cypress/shared/constants/routing.consts';

describe('Main page', () => {
  const page = new Page();
  it('should open employee page', () => {
    page.openEmployees();
    cy.wait(500);
    cy.url().should('eq', EMPLOYEE_URL.fullPath);
    cy.get(BREADCRUMBS).children().last().should('have.text', 'Employees');
  });
  it('should open projects page', () => {
    page.openProjects();
    cy.wait(500);
    cy.get(BREADCRUMBS).children().last().should('have.text', 'Projects');
    cy.url().should('eq', PROJECTS_URL.fullPath);
  });
  it('should decrease  and increase size of menu', () => {
    page.login();
    cy.get(MENU_BUTTON).click();
    cy.get(MENU_LIST).invoke('attr', 'ng-reflect-nz-inline-collapsed').should('eq', 'true');
    cy.get('.menu-expander-button').click();
    cy.get(MENU_LIST).invoke('attr', 'ng-reflect-nz-inline-collapsed').should('eq', 'false');
  });
});
