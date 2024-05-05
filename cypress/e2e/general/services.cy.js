import ServicesPage from '../../pom/servicesPom.cy';

describe('Testing Services page', () => {
    it('Get the number of table rows', () => {
        cy.visit('https://parabank.parasoft.com/parabank/services.htm');

        // Use the countTableRows function from the page object(POM)
        ServicesPage.countTableRows();
    });
});
