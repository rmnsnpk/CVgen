import { Page } from 'cypress/shared/classes/page.class';
import { PROJECTS_ADD_URL, PROJECTS_EDIT_URL } from 'cypress/shared/constants/routing.consts';

describe('Project page', () => {
  const page = new Page();
  beforeEach(() => {
    page.openProjects();
  });
  it('should open add project page', () => {
    cy.get('cvg-project-page .btn').click();
    cy.url().should('eq', PROJECTS_ADD_URL.fullPath);
  });
  it('should open edit project page', () => {
    cy.get('tbody tr:nth-child(2)').click();
    cy.url().should('include', PROJECTS_EDIT_URL.fullPath);
  });
});
