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
describe('Page Tests', () => {
  beforeEach(() => {
    cy.login(); 
  });

});

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
describe('Entities menu', () => {
  it('Should navigate to Task page from Entities menu', () => {
    cy.get('#entity-menu').click(); // Находим меню с идентификатором #entity-menu и кликаем по нему
    cy.get('#entity-menu > a').click(); // Затем находим ссылку внутри меню и кликаем по ней
    cy.url().should('include', '/task?page=1&sort=id,asc'); // Проверяем, что мы перешли на страницу задач
    cy.get('#task-heading').should('include.text', 'Tasks'); // Проверяем, что заголовок страницы содержит текст 'Tasks'
  }); 
})      
//7.User Task
describe('User Interface Tests', () => {
  it('Should navigate to User Task page from Entities menu', () => {
    cy.get('#entity-menu').click();
    cy.get('#entity-menu > div > a:nth-child(2)').click();
    cy.url().should('include', '/user-task');
    cy.get('#user-task-heading').should('include.text', 'User Tasks');
  }); 
})
    
//8.Docs menu
it('Should navigate to Docs page from Docs menu', () => {
  cy.get('#docs-menu').click(); // Находим меню с идентификатором #docs-menu и кликаем по нему
  cy.get('#docs-menu > div > a').click(); // Затем находим ссылку на страницу документации и кликаем по ней
  cy.url().should('include', '/docs/docs'); // Проверяем, что мы перешли на страницу документации
  cy.get('#select', { timeout: 10000 }).should('not.be.empty'); // Проверяем, что элемент #select появился на странице
});

//9.Language
it('Should switch language and verify text', () => {
  cy.switchLanguage('English');
  cy.contains('Home').should('be.visible');

  cy.switchLanguage('Français');
  cy.contains('Accueil').should('be.visible');

  cy.switchLanguage('Русский');
  cy.contains('Главная').should('be.visible');

  cy.switchLanguage('Українська');
  cy.contains('Головна').should('be.visible');

  cy.switchLanguage('English');
  cy.contains('Home').should('be.visible');
});

//10.Settings
describe('Settings', () => {
  it('Should navigate to User settings page from Account menu', () => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="settings"]').click();
    cy.url().should('include', '/account/settings');
    cy.get('#settings-title').should('include.text', 'User settings for');
  });
});

//11. Password
describe('Password', () => {
  it('Should navigate to Password page from Account menu', () => {
   cy.get('#account-menu').click();
   cy.get('[data-cy="passwordItem"]').click();
   cy.url().should('include', '/account/password');
   cy.get('#password-title').should('contain.text', 'Password for');
  });
});
  
// 12. Logout Test
describe('Logout Test', () => {
  it('Should log out successfully', () => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="logout"]').click();
    cy.get('#login-item').should('contain.text','Sign in'); 
  });
});
});

