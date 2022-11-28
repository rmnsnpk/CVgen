import { Page } from 'cypress/shared/classes/page.class';
import {
  DATE_PICKER_CONTROL,
  INPUT_CONTROL,
  MULTISELECT_CONTROL,
  NUM_INPUT_CONTROL,
  TEXT_AREA_CONTROL,
} from 'cypress/shared/constants/projects.consts';
import { PROJECTS_ADD_URL } from 'cypress/shared/constants/routing.consts';
import { RandomField } from 'cypress/shared/utils/utils';

describe('Add prject page', () => {
  const page = new Page();
  const randomField = new RandomField();
  beforeEach(() => {
    page.openProjectsAdd();
  });
  it('should put correct data and save', () => {
    let randomName = randomField.getRandomString();
    cy.get(INPUT_CONTROL + ':first input').type(randomName);
    cy.get(INPUT_CONTROL + ':nth-child(2) input').type(randomField.getRandomString());
    cy.get(NUM_INPUT_CONTROL + ' input').type(randomField.getRandomNum());
    cy.get(DATE_PICKER_CONTROL + ':first input').click();
    cy.wait(500);
    cy.contains(5).click();
    cy.get(DATE_PICKER_CONTROL + ':last input').click();
    cy.wait(500);
    cy.contains(5).click();
    cy.get(MULTISELECT_CONTROL + ':first input').click();
    cy.wait(500);
    cy.contains('Backend Developer').click();
    cy.get('form ' + MULTISELECT_CONTROL + ':nth-child(7) input').click();
    cy.wait(500);
    cy.contains('React').click();
    cy.get('form ' + MULTISELECT_CONTROL + ':nth-child(8) input').click();
    cy.wait(500);
    cy.contains('Test').click();
    cy.get(TEXT_AREA_CONTROL + ':first textarea').type(randomField.getRandomString());
    cy.get(TEXT_AREA_CONTROL + ':last textarea').type(randomField.getRandomString());
    cy.get('cvg-add-project-page button:first').click();
    cy.get('cvg-project-page .ng-star-inserted li:nth-last-child(2)').click();
    cy.get('tbody tr:last td:first').should(($td) => {
      let tdText = $td.text();
      expect(tdText).equal(randomName);
    });
  });
  it('should not redirect and show errors if form not changed', () => {
    cy.get('cvg-add-project-page button:first').click();
    cy.get('.control-error-message');
    cy.url().should('eq', PROJECTS_ADD_URL.fullPath);
  });
  it('should not redirect if any field is invalid', () => {
    cy.get(INPUT_CONTROL + ':first input').type(randomField.getRandomString());
    cy.get(INPUT_CONTROL + ':nth-child(2) input').type(randomField.getRandomString());
    cy.get('cvg-add-project-page button:first').click();
    cy.get('.control-error-message');
    cy.url().should('eq', PROJECTS_ADD_URL.fullPath);
  });
});
