// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
it('Should login with predefined credentials', () => {
cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.contains('Sqlverifier').should('be.visible').click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('switchLanguage', (language, expectedText) => {
    cy.get('selectorForLanguageDropdown').click(); // Замените 'selectorForLanguageDropdown' на селектор вашего выпадающего меню с языками
    cy.contains(language).click(); // Здесь 'language' должен быть текстом языка, который вы хотите выбрать
    cy.contains(expectedText).should('be.visible'); // Проверяем, что текст, ожидаемый после смены языка, видим
  });
  Cypress.Commands.add('logout', () => {
    // Ваш код для выхода из аккаунта
  });
  Cypress.Commands.add('switchLanguage', (language, expectedText) => {
    cy.get('#language-dropdown').click(); // Предположим, что для переключения языка используется выпадающее меню с id "language-dropdown"
    cy.contains(language).click(); // Предположим, что название языка отображается в виде текста и соответствует значению варианта переключения языка
    cy.contains(expectedText).should('be.visible'); // Проверяем, что ожидаемый текст отображается на странице после переключения языка
  });
      
  