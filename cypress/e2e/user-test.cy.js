describe('Page Tests', () => {
//1.Authorisation
it("Should log in with predefined credentials", () => {
  const login = "student";
  const password = "123456!";
})
})
//2.Load page
describe('After Login', () => {
  it('Should load the page successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.contains('Sqlverifier').should('be.visible') 
  })
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
      cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
      cy.contains('Sqlverifier').should('be.visible').click()
    })
  })

//4. Button Home
it('Should click on the Home button', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Home').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/');
});

//5. Button Task
it('Should click on the Task button in the Entities menu', () => {
  cy.contains('Sqlverifier').click(); 
  cy.contains('Entities').click();
  cy.contains('Task').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/task?page=1&sort=id,asc');
});

//6. Button User Task
it('Should click on the User Task button in the Entities menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Entities').click(); 
  cy.contains('User Task').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/user-task');
});

//7. Button English
it('Should click on the English button in the English menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('English').click(); 
  cy.contains('English').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//8. Button Français
it('Should click on the Français button in the English menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('English').click(); 
  cy.contains('Français').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//9. Button Russian
it('Should click on the Russian button in the Français menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Français').click(); 
  cy.contains('Russian').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//10. Button Українська
it('Should click on the Українська button in the Russian menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Russian').click(); 
  cy.contains('Українська').click();
  cy.url().should('include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
});

//10. Button Settings
it('Should click on the Settings button in the Account menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Account').click(); 
  cy.contains('Settings').click();
  cy.url().should('include', '/account/settings');
});

//11. Button Password
it('Should click on the Password button in the Account menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Account').click(); 
  cy.contains('Password').click();
  cy.url().should('include', '/account/password');
});

//12. Button Api
it('Should click on the Api button in the Swagger menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Swagger').click(); 
  cy.contains('API').click();
  cy.url().should('include', '/docs/docs');
});

//13. Button Sign out
it('Should click on the Sign out button in the Account menu', () => {
  cy.contains('Sqlverifier').click();
  cy.contains('Account').click(); 
  cy.contains('Sign out').click();
  cy.url().should('include', '/logout');
});

