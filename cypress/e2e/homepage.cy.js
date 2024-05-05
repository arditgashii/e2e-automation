describe('Home Page Tests', () => {
  beforeEach(() => {
    // Visit the Home page before each test
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  it('checks visibility of necessary elements on the Home Page (not logged in)', () => {
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

    // Check for the visibility of the login form elements
    cy.get('#loginPanel').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[type="submit"]').should('be.visible');

    // Check for the visibility of the right panel elements
    cy.get('#rightPanel span.services').should('be.visible');
    cy.get('#rightPanel ul.services').should('be.visible');
    cy.get('#rightPanel ul.servicestwo').should('be.visible');
    cy.get('#rightPanel h4').should('be.visible').and('contain', 'Latest News');
    cy.get('#rightPanel ul.events').should('be.visible');
    cy.get('#rightPanel p.more').should('be.visible');

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
