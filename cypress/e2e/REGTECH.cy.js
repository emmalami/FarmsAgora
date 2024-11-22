describe('visit Opexa and farmsagora webpages', () => {
    it('passes', () => {
      cy.visit('https://beta.regtech365.com/')
      
      
      /* ==== Generated with Cypress Studio  performing click operations in the header section==== */
      cy.get('#standardsDropdown').click();
      cy.get(':nth-child(3) > .nav-link').click();
      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(':nth-child(1) > .dropdown-item').click();
      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(':nth-child(2) > .dropdown-item').click();
      cy.get('body > :nth-child(6)').click();
      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(':nth-child(3) > .dropdown-item').click();
      /* ==== End Cypress Studio ==== */



      
    })
 
    








})