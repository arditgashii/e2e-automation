import { faker } from '@faker-js/faker';
import registrationPage from '../../pom/registerPom.cy';

describe('End-to-End Automation with Cypress', () => {
    let savedUsername;
    let savedPassword;

    before(() => {
        savedUsername = faker.internet.userName(); // Generate a random username
        savedPassword = faker.internet.password(); // Generate a random password
    });

    it('Registers a new user and navigates to the Bill Pay page', () => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        
        // Fill the registration form with generated username and password
        registrationPage.fillRegistration(savedUsername, savedPassword);
        
        // Click the register button
        cy.get('input[type="submit"][value="Register"]').click();
        
        // Go to Bill Pay page
        cy.get('a[href="/parabank/billpay.htm"]').click();

        // Assertion: Ensure the Bill Pay page is loaded
        cy.url().should('include', '/parabank/billpay.htm');

        // Fill out the payment form
        cy.get('input[name="payee.name"]').type('Test');
        cy.get('input[name="payee.address.street"]').type('Test Street');
        cy.get('input[name="payee.address.city"]').type('Test City');
        cy.get('input[name="payee.address.state"]').type('Test State');
        cy.get('input[name="payee.address.zipCode"]').type('0000');
        cy.get('input[name="payee.phoneNumber"]').type('0000');
        cy.get('input[name="payee.accountNumber"]').type('0000');
        cy.get('input[name="verifyAccount"]').type('0000');
        cy.get('input[name="amount"]').type('0');

        // Click on the "Send Payment" button
        cy.get('input[value="Send Payment"]').click();

      });
    });