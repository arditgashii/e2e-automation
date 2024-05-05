describe('About Us Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');
  });

  it('checks visibility of all necessary elements on the About Us page', () => {
    // Check for the visibility of the top panel elements
    cy.get('.admin').should('be.visible');
    cy.get('.logo').should('be.visible');
    cy.get('.caption').should('be.visible');

    // Verify header navigation links are visible
    cy.get('#headerPanel ul.leftmenu li').each((item) => {
      cy.wrap(item).should('be.visible');
    });

    // Verify the button links in the header
    cy.get('#headerPanel ul.button li').each((item) => {
      cy.wrap(item).should('be.visible');
    });

    // Check for the visibility of the main content elements
    cy.get('h1.title').should('be.visible').and('contain', 'ParaSoft Demo Website');
    cy.get('#rightPanel p').should('be.visible'); // Checks all paragraphs within the right panel

    // Check for the login form visibility
    cy.get('#loginPanel').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[type="submit"]').should('be.visible');

    // Footer checks
    cy.get('#footerPanel').should('be.visible');
    cy.get('#footerPanel ul li').each((item) => {
      cy.wrap(item).should('be.visible');
    });
    cy.get('#footerPanel p.copyright').should('be.visible');
    cy.get('ul.visit li').each((item) => {
      cy.wrap(item).should('be.visible');
    });
  });
});
