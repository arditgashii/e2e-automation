class AboutUsPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/about.htm');
    }
  
    getHeaderText() {
      return cy.get('h1').invoke('text');
    }
  }
  
  export default new AboutUsPage();