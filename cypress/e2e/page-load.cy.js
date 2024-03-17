describe('Page Load Test', () => {
  it('Should load the Verifier website successfully', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
    cy.url().should('eq', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc')
   
  })
})
