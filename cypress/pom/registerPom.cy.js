import { faker } from '@faker-js/faker';

// Creating a registrationPage object to encapsulate registration form filling logic
const registrationPage = {
    // Method to fill the registration form with generated fake data and provided username/password
    fillRegistration(username, password) {
        // Generate each input using faker
        const fakeFirstName = faker.name.firstName();
        const fakeLastName = faker.name.lastName();
        const fakeStreet = faker.address.streetAddress();
        const fakeCity = faker.address.city();
        const fakeState = faker.address.state();
        const fakeZipCode = faker.address.zipCode();
        const fakePhoneNumber = faker.phone.number();
        const fakeSSN = faker.datatype.number({ min: 100000000, max: 999999999 }).toString();
        
        // Fill the form fields with generated fake data
        cy.get('#customer\\.firstName').type(fakeFirstName);
        cy.get('#customer\\.lastName').type(fakeLastName);
        cy.get('#customer\\.address\\.street').type(fakeStreet);
        cy.get('#customer\\.address\\.city').type(fakeCity);
        cy.get('#customer\\.address\\.state').type(fakeState);
        cy.get('#customer\\.address\\.zipCode').type(fakeZipCode);
        cy.get('#customer\\.phoneNumber').type(fakePhoneNumber);
        cy.get('#customer\\.ssn').type(fakeSSN);
        
        cy.get('#customer\\.username').type(username);
        cy.get('#customer\\.password').type(password);
        cy.get('#repeatedPassword').type(password);
    }
};

export default registrationPage;