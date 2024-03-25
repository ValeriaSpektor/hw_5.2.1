describe('Verifier Website Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-staging-08050d656f7a.herokuapp.com/login');
  });

  it('Should display all required fields on the login page', () => {
    cy.get('[name="username"]').should('be.visible');
    cy.get('[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Should display error message if login is attempted with empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('This field is required').should('be.visible');
  });

  it('Should display error message if login is attempted with invalid credentials', () => {
    cy.get('[name="username"]').type('invalidusername');
    cy.get('[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Should successfully login with valid credentials', () => {
    const username = 'validusername';
    const password = 'validpassword';
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.contains('Login successful').should('be.visible');
  });
});
