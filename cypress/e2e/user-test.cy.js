//1.Load page
describe('Page Load Test', () => {
  it('Should load the page successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.contains('Sqlverifier').should('be.visible') 
  })
})
 //2.Authorisation
  it("Autorisation of registered user",() => {
    const login = "student";
    const password = "123456!";
  })

  //3.Login test
  describe('Login Test', () => {
    it('Should login with predefined credentials', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
      cy.get('#account-menu').click()
      cy.get('#login-item').click()
      cy.get('input[name="username"]').type('student');
      cy.get('input[name="password"]').type('123456!');
      cy.get('button[type="submit"]').click();
      // cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
      cy.contains('Sqlverifier').should('be.visible').click()
    })
  })

//4. Button Home
it('Should click on the Home button', () => {
  cy.get('button[type="Home"]').click();
  cy.contains('Home').should('be.visible');
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/');
});

//5. Button Task
it('Should click on the Task button in the Entities menu', () => {
  cy.get("#entity-menu").click(); 
  cy.get("#entity-menu > div > a:nth-child(1)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/task?page=1&sort=id,asc');
});

//6. Button User Task
it('Should click on the User Task button in the Entities menu', () => {
  cy.get("#entities-menu").click(); 
  cy.get("#entities-menu > div > a:nth-child(2)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/user-task');
});

//7. Button English
it('Should click on the English button in the English menu', () => {
  cy.get("#english-menu").click(); 
  cy.get("#english-menu > div > a:nth-child(0)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//8. Button Français
it('Should click on the Français button in the English menu', () => {
  cy.get("#english-menu").click(); 
  cy.get("#english-menu > div > a:nth-child(1)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//9. Button Russian
it('Should click on the Russian button in the Français menu', () => {
  cy.get("#français-menu").click(); 
  cy.get("#français-menu > div > a:nth-child(2)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//10. Button Українська
it('Should click on the Українська button in the Russian menu', () => {
  cy.get("#русский-menu").click(); 
  cy.get("#русский-menu > div > a:nth-child(3)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//10. Button Settings
it('Should click on the Settings button in the Account menu', () => {
  cy.get("#account-menu").click(); 
  cy.get("#account-menu > div > a:nth-child(0)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/settings');
});

//11. Button Password
it('Should click on the Password button in the Account menu', () => {
  cy.get("#account-menu").click(); 
  cy.get("#account-menu > div > a:nth-child(1)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/password');
});

//12. Button Api
it('Should click on the Api button in the Swagger menu', () => {
  cy.get("#swagger-menu").click(); 
  cy.get("#swagger-menu > div > a:nth-child(0)").click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/docs/docs');
});

//13. Button Sign out
it('Should click on the Sign out button in the Account menu', () => {
  cy.get("#account-menu").click(); 
  cy.get("#account-menu > div > a:nth-child(3)").click();
  cy.url().should('include', '/logout');
});

