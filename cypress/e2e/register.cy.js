import { faker } from '@faker-js/faker';
import registrationPage from '../pom/registerPom.cy';

describe('User Registration and Login Test', () => {
    // Declaring variables to store generated username and password
    let savedUsername;
    let savedPassword;

    // Before running any tests, generate a random username and password
    before(() => {
        savedUsername = faker.internet.userName(); // Generate a random username
        savedPassword = faker.internet.password(); // Generate a random password
    });

    // Test case for user registration
    it('Register', () => {
        // Visit the registration page
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        
        // Fill the registration form with generated username and password
        registrationPage.fillRegistration(savedUsername, savedPassword);
        
        // Click the register button
        cy.get('input[type="submit"][value="Register"]').click();
        
        // Click the logout button after successful registration
        cy.contains('Log Out').click();
    });

    // Test case for user login
    it('Login', () => {
        // Visit the login page
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        
        // Enter the generated username
        cy.get('input[name="username"]').type(savedUsername);
        
        // Enter the generated password
        cy.get('input[name="password"]').type(savedPassword);
        
        // Click the login button
        cy.get('input[type="submit"][value="Log In"]').click();
    });
});
