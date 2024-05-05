describe('Admin Page Actions', () => {
  it('Perform actions on Admin Page', () => {
      // Visit the Admin Page
      cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

      // Click the button to clean actions
      cy.get('button.button[name="action"][value="CLEAN"]').click();

      // Click on the JDBC* radio button and verify it is checked
      cy.get('#accessMode4').check().should('be.checked');

      // Enter '500' into the Initial Balance input
      cy.get('#initialBalance').clear().type('1500');

      // Enter '200' into the Minimum Balance input
      cy.get('#minimumBalance').clear().type('450');

      // Select 'Web Service' from the Loan Provider dropdown
      cy.get('#loanProvider').select('Web Service');

      // Enter '30' into the Threshold input
      cy.get('#loanProcessorThreshold').clear().type('30');

      // Submit the form
      cy.get('#adminForm').submit();
  });
});
