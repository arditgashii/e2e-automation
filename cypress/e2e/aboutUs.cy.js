describe('About Us Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');
  });

  it('confirms page load and checks visibility of main text', () => {
    // Confirm the page is loaded
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/about.htm').then(() => {
      cy.log("Page loaded successfully!");
    });

    // Check visibility of main text
    cy.contains('ParaSoft Demo Website').should('be.visible');
    cy.contains('ParaBank is a demo site').should('be.visible');
    cy.contains('not a real bank!').should('be.visible');
    cy.contains('For more information about Parasoft solutions').should('be.visible');
    cy.contains('www.parasoft.com').should('be.visible');

    // Check visibility of other elements in page
    cy.get('h1').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[type="submit"]').should('be.visible');
    cy.get('.admin').should('be.visible');
    cy.get('.logo').should('be.visible');
    cy.get('a').should('be.visible');
  });
});
