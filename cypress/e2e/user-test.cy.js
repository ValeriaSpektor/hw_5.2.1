const { nth } = require("lodash")

describe('Page Load Test', () => {
  it('Should load the page successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.contains('Sqlverifier').should('be.visible') 
  })

  
  it("Autorisation of registered user",() => {
    const login = "student";
    const password = "123456!";
  })
})

//test number 2
describe('Login Test', () => {
  it('Should login with predefined credentials', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/')
    cy.get('#account-menu').click()
    cy.get('#login-item').click()
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
cy.contains('Sqlverifier').should('be.visible').click()
  })
})

// Test for clicking on the Home button
it('Should click on the Home button', () => {
  cy.get("#header-tabs").click();
  cy.get("#header-tabs").should("be.visible");
  cy.url().should('include', '/?page=1&sort=id,asc');
});

it('Should click on the Task button in the Entities menu', () => {
  cy.get("#entity-menu").click(); 
  cy.get("#entity-menu > div > a:nth-child(1)").click();
  cy.url().should('include', '/task?page=1&sort=id,asc');
});

  it('Should click on the User Task button in the Entities menu', () => {
    cy.get("#entities-menu").click(); // Найти элемент меню Entities и кликнуть на него
    cy.get("#entity-menu > div > a:nth-child(2)").click(); // Найти кнопку Task в меню Entities и кликнуть на нее
    cy.url().should('include', '/user-task'); // Проверить, что URL содержит '/task?page=1&sort=id,asc'
});

it('Should click on the English button in the English menu', () => {
cy.get("#english-menu").click(); 
cy.get("#english-menu > div > a:nth-child(1)").click();
cy.url().should('include', '/user-task');
});

it('Should click on the Russian button in the English menu', () => {
  cy.get("#русский-menu").click(); 
  cy.get("#русский-menu > div > a:nth-child(3)").click();
  cy.url().should('include', '/user-task');
});

it('Should click on the Français button in the English menu', () => {
  cy.get("#Українська-menu").click(); 
  cy.get("#Українська-menu > div > a:nth-child(4)").click();
  cy.url().should('include', '/user-task');
});

it('Should click on the Settings button in the Account menu', () => {
  cy.get("#Account-menu").click(); 
  cy.get("#Account-menu > div > a:nth-child(1)").click();
  cy.url().should('include', '/account/settings');
});

it('Should click on the Password button in the Account menu', () => {
  cy.get("#Account-menu").click(); 
  cy.get("#Account-menu > div > a:nth-child(2)").click();
  cy.url().should('include', '/account/password');
});

it('Should click on the Api button in the Swagger menu', () => {
  cy.get("#Swagger-menu").click(); 
  cy.get("#Swagger-menu > div > a:nth-child(1)").click();
  cy.url().should('include', '/docs/docs');
});

it('Should click on the Sign out button in the Account menu', () => {
  cy.get("#Account-menu").click(); 
  cy.get("#Account-menu > div > a:nth-child(2)").click();
  cy.url().should('include', '/logout');
});





