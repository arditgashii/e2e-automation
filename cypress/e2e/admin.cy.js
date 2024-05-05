describe('Admin Page Actions', () => {
  it('MVP: Perform actions on Admin Page', () => {
      // Visit the Admin Page
      cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

      // Click on the SOAP radio button
      cy.get('#accessMode4').check();

      // Select an option from the Loan Provider dropdown
      cy.get('#loanProvider').select('Web Service');

      // Enter a value in the Threshold input
      cy.get('#loanProcessorThreshold').clear().type('30');

      // Click on the Submit button
      cy.get('#adminForm').submit();
  });
});
