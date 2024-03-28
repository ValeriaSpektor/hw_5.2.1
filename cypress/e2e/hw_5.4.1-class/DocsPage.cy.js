class DocsPage {
    visit() {
      cy.visit('/docs');
    }
  
    verifyPageTitle() {
      cy.get('#docs-heading').should('have.text', 'Documentation');
    }
  
    
  }
  
  export default new DocsPage();
  