// cypress/integration/home_page_spec.js

describe('Home Page Test', () => {
  it('Loads the home page and verifies elements', () => {
    // Visit the home page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Verify the presence of main elements
    cy.get('#mainPanel').should('exist');
    cy.get('#topPanel').should('exist');
    cy.get('#headerPanel').should('exist');
    cy.get('#bodyPanel').should('exist');
    cy.get('#footermainPanel').should('exist');

    // Verify the presence of specific elements
    cy.get('h2').contains('Customer Login').should('exist');
    cy.get('form[name="login"]').should('exist');
    cy.get('form[name="login"] input[name="username"]').should('exist');
    cy.get('form[name="login"] input[name="password"]').should('exist');
    cy.get('form[name="login"] input[type="submit"]').should('exist');
    cy.contains('Forgot login info?').should('exist');
    cy.contains('Register').should('exist');

    // Test login form functionality (You may need to modify this part based on your actual login process)
    cy.get('form[name="login"] input[name="username"]').type('testuser');
    cy.get('form[name="login"] input[name="password"]').type('password');
    cy.get('form[name="login"]').submit();

  });
});
