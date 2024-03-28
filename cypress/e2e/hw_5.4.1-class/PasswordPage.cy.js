class PasswordPage {
    visit() {
      cy.visit('/password');
    }
  
    verifyPageTitle() {
      cy.get('#password-heading').should('have.text', 'Change Password');
    }
  
    
  }
  
  export default new PasswordPage();
  