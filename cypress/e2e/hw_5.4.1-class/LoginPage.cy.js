export class LoginPage {
  login(username, password) {
    cy.get('#account-menu').click();
    cy.get('#login-item').click();
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }
}
