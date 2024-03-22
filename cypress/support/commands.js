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
//Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
    // const { x, y } = options;
 
    // cy.wrap(subject)
    //   .trigger('mousedown', { which: 1, pageX: x, pageY: y })
    //   .trigger('mousemove', { which: 1, pageX: x + 10, pageY: y + 10 });
  
    
    // cy.wait(1000);
      
    // cy.get('body').trigger('mouseup', { force: true });
  


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('switchLanguage', (language) => {
    cy.get('.dropdown.nav-item').click(); // Нажимаем на кнопку переключения языка
    cy.contains('.dropdown-menu-end .dropdown-item', language).click(); // Выбираем язык из выпадающего списка
  });
  Cypress.Commands.add('navigateToEntityMenu', () => {
    cy.get('#entity-menu').click();
  });
      //Cypress.Commands.add('logout', () => {
    Cypress.Commands.add('logout', () => {
    
        cy.get('#logout-button').click(); 
      });
      




  