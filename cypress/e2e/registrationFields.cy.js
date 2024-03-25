describe('Registration Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/register');
  });

  it('Should display all required fields on the registration page', () => {
    cy.get('input[name="username"]').should('be.visible').should('have.attr', 'placeholder', 'Your username');
    cy.get('input[name="email"]').should('be.visible').should('have.attr', 'placeholder', 'Your email');
    cy.get('input[name="password"]').should('be.visible').should('have.attr', 'placeholder', 'New password');
    cy.get('input[name="confirmPassword"]').should('be.visible').should('have.attr', 'placeholder', 'New password confirmation');
    cy.contains('Password strength:').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible').should('contain', 'Register');
  });

  it('Should display error message if registration is attempted with empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('This field is required').should('be.visible');
  });

  it('Should display error message if registration is attempted with invalid username format', () => {
    cy.get('input[name="username"]').type(' '); 
    cy.get('button[type="submit"]').click();
    cy.contains('Please enter a valid username').should('be.visible');
  });

  it('Should display error message if registration is attempted with passwords that do not match', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="confirmPassword"]').type('password456');
    cy.get('button[type="submit"]').click();
    cy.contains('Passwords must match').should('be.visible');
  });

  it('Should display error message if registration is attempted with a weak password', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="confirmPassword"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('Password is too weak').should('be.visible');
  });

  it('Should successfully register a new user with valid credentials', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('StrongPassword123');
    cy.get('input[name="confirmPassword"]').type('StrongPassword123');
    cy.get('button[type="submit"]').click();
    cy.contains('Registration successful').should('be.visible');
  });
});
