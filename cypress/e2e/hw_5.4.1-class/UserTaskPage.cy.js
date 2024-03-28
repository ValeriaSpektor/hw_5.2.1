class UserTaskPage {
    visit() {
      cy.visit('/user-task');
    }
  
    verifyPageTitle() {
      cy.get('#user-task-heading').should('have.text', 'User Tasks');
    }
  
    
  }
  
  export default new UserTaskPage();
  