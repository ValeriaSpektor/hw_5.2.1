//1.Load page
describe('Page Load Test', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  });

  it('Should load the Verifier website successfully', () => {
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.contains('Sqlverifier').should('be.visible');
  });
});

//2.Authorization Test
describe('Authorization Test', () => {
  beforeEach(() => {
    const username = 'student';
    const password = '123456!';
    cy.validLogin(username, password);
  });

  it('Should authorize with valid credentials', () => {
    // You can add assertions here if needed
  });
});

//3.Login test
describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
  });

  it('Should login with predefined credentials', () => {
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
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should navigate to Home page from Header Menu', () => {
    cy.get('#header-tabs').click();
    cy.get('#header-tabs').should('be.visible');
    cy.url().should('include', '/?page=1&sort=id,asc');
  });
});

//5.Task
describe('Entities menu', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();

    // Выполняем переход на страницу "Task"
    cy.get('#entity-menu').click();
    cy.get('#entity-menu > a').click();
  });

  it('Should navigate to Task page from Entities menu', () => {
    // Проверяем URL адрес
    cy.url().should('include', '/task?page=1&sort=id,asc');

    // Проверяем, что элемент на странице "Task" присутствует
    cy.get('#task-heading').should('include.text', 'Tasks');
  });
});
//6.User Task
describe('User Interface Tests', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should navigate to User Task page from Entities menu', () => {
    cy.get('#entity-menu').click();
    cy.get('#entity-menu > div > a:nth-child(2)').click();
    cy.url().should('include', '/user-task');
    cy.get('#user-task-heading').should('include.text', 'User Tasks');
  });
});

//7.Docs menu
describe('Docs menu', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should navigate to Docs page from Docs menu', () => {
    cy.get('#docs-menu').click();
    cy.get('#docs-menu > div > a').click();
    cy.url().should('include', '/docs/docs');
    cy.get('#select', { timeout: 10000 }).should('not.be.empty');
  });
});

//8.Language
describe('Language', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

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
});

//9.Settings
describe('Settings', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should navigate to User settings page from Account menu', () => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="settings"]').click();
    cy.url().should('include', '/account/settings');
    cy.get('#settings-title').should('include.text', 'User settings for');
  });
});

//10. Password
describe('Password', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should navigate to Password page from Account menu', () => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="passwordItem"]').click();
    cy.url().should('include', '/account/password');
    cy.get('#password-title').should('contain.text', 'Password for');
  });
});

//11. Logout Test
describe('Logout Test', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('123456!');
    cy.get('button[type="submit"]').click();
  });

  it('Should log out successfully', () => {
    cy.get('#account-menu').should('be.visible').click(); // Добавляем проверку на видимость
    cy.get('[data-cy="logout"]').click();
    cy.get('#login-item').should('contain.text','Sign in'); 
  });
});




