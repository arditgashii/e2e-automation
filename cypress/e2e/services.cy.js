describe('Testing Services page', () => {
  it('Get the number of table rows', () => {
      cy.visit('https://parabank.parasoft.com/parabank/services.htm');
      
      cy.get('span').should('be.visible');
      cy.get('td').should('be.visible');
      
      // Find the table on the page, count its rows (tr), and store the count as an alias ('rowCount')
      cy.get('table').find('tr').its('length').as('rowCount');
      
      // Retrieve the count of rows from the alias and log it
      cy.get('@rowCount').then((count) => {
          cy.log(`The page has ${count} rows!`);
      });
  });
});
