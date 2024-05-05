describe('Testing Services page', () => {
  it('MVP: Get the number of table rows', () => {
      cy.visit('https://parabank.parasoft.com/parabank/services.htm');
      cy.get('table').find('tr').its('length').as('rowCount');
      cy.get('@rowCount').then((count) => {
          cy.log(`Faqja ka ${count} rresha!`);
      });
  });
});
