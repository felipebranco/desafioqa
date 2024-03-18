import faker from 'faker';
import { cpf } from 'cpf-cnpj-validator';

Cypress.Commands.add('realizarCadastro', () => {
  faker.locale = 'pt_BR';

  const fakeFirstName = faker.name.firstName();
  const fakeEmail = faker.internet.email();
  const fakeCPF = cpf.generate();
  const phoneNumber = faker.phone.phoneNumber();

    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click().type(fakeFirstName);
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible').type(fakeEmail);
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type(phoneNumber);
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type(fakeCPF);
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click();
    cy.get(':nth-child(3) > :nth-child(4) > .custom-check > .checkable').click();
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#conversion-from-new-model > .form-message-overlay > .form-message-overlay__content > .form-message-overlay__top-message').should('have.text', 'Solicitação realizada');
    cy.get('#conversion-from-new-model > .form-message-overlay > .form-message-overlay__content > .form-message-overlay__close-button').click();
});