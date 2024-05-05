describe('ParaBank Home Page', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('should display all required elements', () => {
    cy.get('.logo').should('be.visible')
    cy.get('#loginPanel').should('be.visible')
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('input[type="submit"]').should('be.visible')
    cy.contains('Forgot login info?').should('be.visible')
    cy.contains('Register').should('be.visible')
    cy.contains('ATM Services').should('be.visible')
    cy.contains('Online Services').should('be.visible')
    cy.contains('Latest News').should('be.visible')
    cy.contains('Read More').should('be.visible')
  })
})
