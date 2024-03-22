//1.Load page
describe('Page Load Test', () => {
  it('Should load the Verifier website successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.contains('Sqlverifier').should('be.visible') 
  })
})
describe('Page Tests', () => {
//2.Authorisation
it("Should log in with predefined credentials", () => {
  const login = "student";
  const password = "123456!";
})
})
//3.Login test
describe('Login Test', () => {
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
});

  //4.User menu
  describe('User Menu Tests', () => {
    beforeEach(() => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc'); // Переход на главную страницу перед каждым тестом
      cy.get('#account-menu').click()
      cy.get('#login-item').click()
      cy.get('input[name="username"]').type('student');
      cy.get('input[name="password"]').type('123456!');
      cy.get('button[type="submit"]').click();
    })
    
     //5.Button Home
     describe('Header Menu Home', () => {
      it('Should navigate to Home page from Header Menu', () => {
        cy.get('#header-tabs').click();
        cy.get('#header-tabs').should('be.visible');
        cy.url().should('include', '/?page=1&sort=id,asc');
        })
      });
    });
//6.Task
        describe('Login Test', () => {
    it('Should navigate to Task page from Entities menu', () => {
     
        cy.get('#entity-menu').click();
        cy.get('#entity-menu > div > a:nth-child(1)').click();
        cy.url().should('include', '/task?page=1&sort=id,asc');
        cy.get('#task-heading').should('include.text', 'Tasks');
    });
//7.User Task
    it('Should navigate to User Task page from Entities menu', () => {
        
        cy.get('#entity-menu').click();
        cy.get('#entity-menu > div > a:nth-child(2)').click();
        cy.url().should('include', '/user-task');
        cy.get('#user-task-heading').should('include.text', 'User Tasks');
    });

    it('Should navigate to Home page after clicking on a specific element', () => {
      cy.contains('specific-element').click();
      cy.get('li[class="nav-item"]').should('be.visible').click();
      cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    });
//8.Docs menu
    it('Should navigate to Docs page from Docs menu', () => {
       
        cy.get('#docs-menu').click();
        cy.get('#docs-menu > div > a').click();
        cy.url().should('include', '/docs/docs');
        cy.get('#select', { timeout: 10000 }).should('not.be.empty');
    });
//9.Language
    it('Should switch language and verify text', () => {
      
      cy.switchLanguage('English', 'Home');
    cy.switchLanguage('Français', 'Accueil');
    cy.switchLanguage('Русский', 'Главная');
    cy.switchLanguage('Українська', 'Головна');
    cy.switchLanguage('English', 'Home');
//10.Settings
    it('Should navigate to User settings page from Account menu', () => {
        
        cy.get('#account-menu').click();
        cy.get('#account-menu > div > a:nth-child(1)').click();
        cy.url().should('include', '/account/settings');
        cy.get('#settings-title').should('include.text', 'User settings for');
    });
//11. Password
    it('Should navigate to Password page from Account menu', () => {
        cy.get('#account-menu').click();
        cy.get('[data-cy="passwordItem"]').click();
        cy.url().should('include', '/account/password');
        cy.get('#password-title').should('include.text', 'Password for');
    });
//12.Logout
    it('Should logout', () => {
        cy.logout();
    });
})
})