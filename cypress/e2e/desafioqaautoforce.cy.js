/// <referece types="Cypress"/>

describe('Preenchimento do Formulário de Leads', () => {

  beforeEach(() => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/novos/z4-2022'); { timeout: 50000 }
  });

  it('Validar campos obrigatórios do formulário de leads', () => { 
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click();
    // 4. Clicar o campo E-mail
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').click();
    // 5. Clicar o campo Telefone/Whatsapp
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').click();
    // 6. Clicar o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').click();
    // 7. Clicar no campo Unidade
    cy.get(':nth-child(6) > :nth-child(2) > .choices > .choices__inner > .choices__list')
    // 8. Clicar Sim Véiculo na troca
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click();
    // 9. Clicar No Label Quero receber contato por:     
    cy.get(':nth-child(3) > .conversion-form__control-label').click();
    // 10. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_name').should('contain', 'Por favor, preencha esse campo')
    cy.get('#bouncer-error_email').should('contain', 'Por favor, preencha esse campo')
    cy.get('#bouncer-error_phone').should('contain', 'Por favor, preencha esse campo')
    cy.get('#bouncer-error_cpf').should('contain', 'Por favor, preencha esse campo')
    cy.get('#bouncer-error_contact-options').should('contain', 'Por favor, preencha esse campo')

  });

  it('Validar erro na inclusao com campo Nome sem preenchimento', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click();
    // 4. Preencher campo Email corretamente
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('teste@teste.com.br')
    // 5. Preencher campo Telefone/Whatsapp corretamente 
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('(16)99999-9999')
    // 6. Preencher o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('00.000.000-000')
    // 7. Clicar Sim Véiculo na troca corretamente
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click();
    // 8. Clicar No Label Quero receber contato por: E-mail
    cy.get(':nth-child(3) > :nth-child(2) > .custom-check > .checkable').click();
    // 9. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_name').should('contain', 'Por favor, preencha esse campo')
  });

  it('Validar erro na inclusao com campo E-mail inválido', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('TESTE DESAFIO QA')
    // 4. Preencher campo Email corretamente
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('teste')
    // 5. Preencher campo Telefone/Whatsapp corretamente 
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('(16)99999-9999')
    // 6. Preencher o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('00.000.000-000')
    // 7. Clicar Não Véiculo na troca corretamente
    cy.get(':nth-child(2) > .checkable').click();
    // 8. Clicar No Label Quero receber contato por: Whatsapp
    cy.get(':nth-child(3) > :nth-child(3) > .custom-check > .checkable').click();
    // 9. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_email').should('contain', 'Por favor, informe um e-mail válido')
  });

  it('Validar erro na inclusao com campo Telefone/Whatsapp inválido', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('TESTE DESAFIO QA')
    // 4. Preencher campo Email corretamente
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('testedesafioqa@testye.com.br')
    // 5. Preencher campo Telefone/Whatsapp corretamente 
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('(16)99999')
    // 6. Preencher o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('00.000.000-000')
    // 7. Clicar Não Véiculo na troca corretamente
    cy.get(':nth-child(2) > .checkable').click();
    // 8. Clicar No Label Quero receber contato por: Telefone
    cy.get(':nth-child(3) > :nth-child(4) > .custom-check > .checkable').click();
    // 9. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_phone').should('contain', 'Por favor, informe um telefone válido')
  });

  it('Validar erro na inclusao com campo CPF inválido', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('TESTE DESAFIO QA')
    // 4. Preencher campo Email corretamente
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('testedesafioqa@testye.com.br')
    // 5. Preencher campo Telefone/Whatsapp corretamente 
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('(16)99999')
    // 6. Preencher o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('000.000.00')
    // 7. Clicar Não Véiculo na troca corretamente
    cy.get(':nth-child(2) > .checkable').click();
    // 8. Clicar No Label Quero receber contato por: Telefone
    cy.get(':nth-child(3) > :nth-child(4) > .custom-check > .checkable').click();
    // 9. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_cpf').should('contain', 'O tamanho mínimo do texto é 14. Atualmente você tem 10 caracteres.')
  });

  it('Validar erro na inclusao com campo Quero receber contaro por sem preenchimento', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get('.header__navbar > [href="/dealer-bmw-desafio/"] > .header__logo').should('be.visible');
    cy.get('.showcase-new-simple__image > img').should('be.visible');
    // 4. Clicar o campo Nome”
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click();
    // 4. Preencher campo Email corretamente
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('teste@teste.com.br')
    // 5. Preencher campo Telefone/Whatsapp corretamente 
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('(16)99999-9999')
    // 6. Preencher o campo CPF
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('00.000.000-000')
    // 7. Clicar Sim Véiculo na troca corretamente
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click();
    // 8. Clicar No Botão Estou interessado
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#bouncer-error_contact-options').should('contain', 'Por favor, preencha esse campo')
  });

  it('Validar inclusao com sucesso', () => {
    // 3. Validar que a página inicial carregou com sucesso e os campos são obrigatórios
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click().type("Lucas Neto");
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible').type("lucas.neto@awesdaxcz.com.br");
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').type("169987-4561");
    cy.get(':nth-child(1) > :nth-child(5) > .form-control').type("00.000.000-000");
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click();
    cy.get(':nth-child(3) > :nth-child(4) > .custom-check > .checkable').click();
    cy.get('.form-conversion__body > .btn').click();
    cy.get('#conversion-from-new-model > .form-message-overlay > .form-message-overlay__content > .form-message-overlay__top-message').contains('Solicitação realizada');
    cy.get('#conversion-from-new-model > .form-message-overlay > .form-message-overlay__content > .form-message-overlay__close-button').click()
  });
});