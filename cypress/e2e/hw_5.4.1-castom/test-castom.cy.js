describe('Entities menu', () => {
  beforeEach(() => {
    cy.fixture('credentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });

  it('Should navigate to Password page from Entities menu', () => {
    cy.goToPasswordPage();
    cy.url().should('include', '/password');
    cy.get('#password-heading').should('include.text', 'Change Password');
  });

  it('Should navigate to User Task page from Entities menu', () => {
    cy.goToUserTaskPage();
    cy.url().should('include', '/user-task');
    cy.get('#user-task-heading').should('include.text', 'User Tasks');
  });

  it('Should navigate to Docs page from Entities menu', () => {
    cy.goToDocsPage();
    cy.url().should('include', '/docs');
    cy.get('#docs-heading').should('include.text', 'Documentation');
  });

  it('Should navigate to Entities page from Entities menu', () => {
    cy.goToEntitiesPage();
    cy.url().should('include', '/entities');
    cy.get('#entities-heading').should('include.text', 'Entities');
  });

  // Добавляем тест для переключения языка
  it('Should switch language and verify text', () => {
    cy.switchLanguageAndVerify('English', 'Home');
    cy.switchLanguageAndVerify('Français', 'Accueil');
    cy.switchLanguageAndVerify('Русский', 'Главная');
    cy.switchLanguageAndVerify('Українська', 'Головна');
    cy.switchLanguageAndVerify('English', 'Home');
  });
});

describe('Settings', () => {
  beforeEach(() => {
    cy.fixture('credentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });

  it('Should navigate to User settings page from Account menu', () => {
    cy.goToSettingsPage();
    cy.url().should('include', '/account/settings');
    cy.get('#settings-title').should('include.text', 'User settings for');
  });
});

describe('Password', () => {
  beforeEach(() => {
    cy.fixture('credentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });

  it('Should navigate to Password page from Account menu', () => {
    cy.goToPasswordPageFromAccountMenu();
    cy.url().should('include', '/account/password');
    cy.get('#password-title').should('contain.text', 'Password for');
  });
});

describe('Logout Test', () => {
  beforeEach(() => {
    cy.fixture('credentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });

  it('Should log out successfully', () => {
    cy.logout();
    cy.get('#login-item').should('contain.text','Sign in'); 
  });
});
