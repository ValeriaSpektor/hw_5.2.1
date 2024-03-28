class SettingsPage {
    visit() {
      cy.visit('/settings');
    }
  
    verifyPageTitle() {
      cy.get('#settings-heading').should('have.text', 'Settings');
    }
  
    
  }
  
  export default new SettingsPage();
  