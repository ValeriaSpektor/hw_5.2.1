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
 Cypress.Commands.add('login', (email, password) => { ... })
//cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
cy.get('#account-menu').click()
cy.get('#login-item').click()
cy.get('input[name="username"]').type('student');
cy.get('input[name="password"]').type('123456!');
cy.get('button[type="submit"]').click();
//
// -- This is a child command --
Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
cy.get('.draggable-element').drag({ x: 100, y: 50 });
//
// -- This is a dual command --
Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
cy.get('.modal-close-button').dismiss();
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    
    cy.request(url).then((response) => {
      if (response.status === 200) {
        originalFn(url, options);
      } else {
        
        cy.log(`Page ${url} is not available`);
      }
    });
  });