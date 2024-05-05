describe('Contact Form Submission Test', () => {
  it('Fill and submit contact form', () => {
      // Visit the homepage
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');

      // Click on the 'Contact' link
      cy.get('li.contact a').click();

      // Fill the input fields with the provided data
      cy.get('#name').type('Ardit Gashi');
      cy.get('#email').type('arditgashi3@hotmail.com');
      cy.get('#phone').type('+38344123456');
      cy.get('#message').type('This is a message for the bank.');

      // Submit the form
      cy.get('input[type="submit"][value="Send to Customer Care"]').click();

      // Check visibility of confirmation messages
      cy.contains('h1.title', 'Customer Care').should('be.visible');
      cy.contains('p', 'Thank you').should('be.visible');
      cy.contains('p', 'A Customer Care Representative will be contacting you.').should('be.visible');

      // Log a message in Cypress console confirming successful form submission
      cy.log('Form submitted successfully!');
  });
});
