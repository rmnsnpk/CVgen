import { Page } from 'cypress/shared/classes/page.class';
import { INPUT_CONTROL } from 'cypress/shared/constants/projects.consts';
import { PROJECTS_EDIT_URL } from 'cypress/shared/constants/routing.consts';
import { RandomField } from 'cypress/shared/utils/utils';

describe('Add prject page', () => {
  const page = new Page();
  const randomField = new RandomField();
  beforeEach(() => {
    page.openProjectsEdit();
  });
  it('should change data and save', () => {
    let randomName = randomField.getRandomString();
    cy.get(INPUT_CONTROL + ':first input')
      .clear()
      .type(randomName);
    cy.get('cvg-edit-project-page button:first').click();
    cy.get('tbody tr:nth-child(2) td:first').should(($td) => {
      let tdText = $td.text();
      expect(tdText).equal(randomName);
    });
  });
  it('should not redirect if form not changed', () => {
    cy.get('cvg-edit-project-page button:first').click();
    cy.url().should('include', PROJECTS_EDIT_URL.fullPath);
  });
  it('should not redirect if any field is invalid', () => {
    cy.get('cvg-input-control:first input').clear();
    cy.get('.control-error-message');
    cy.url().should('include', PROJECTS_EDIT_URL.fullPath);
  });
});
