const ServicesPage = {
    countTableRows: () => {
        // Check if 'span' and 'td' elements are visible
        cy.get('span').should('be.visible');
        cy.get('td').should('be.visible');

        // Find the table on the page, count its rows (tr), and store the count as an alias ('rowCount')
        cy.get('table').find('tr').its('length').as('rowCount');

        // Retrieve the count of rows from the alias and log it
        cy.get('@rowCount').then((count) => {
            cy.log(`The page has ${count} rows!`);
        });
    }
};

export default ServicesPage;