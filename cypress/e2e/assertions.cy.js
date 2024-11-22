describe ('open Opex website', () =>{
  it('Landing page', () => {

      cy.visit ('https://www.opexconsult.com/')
      
      //assert that the contact us form page can be seen
      cy.get('.top-0 > .relative').should('be.visible')
      
      //to get landing page title
      cy.title().then((title) => {
        cy.log(`Page title is: ${title}`);
    });

    cy.get(':nth-child(2) > .relative > .flex-col')
    cy.get(':nth-child(4) > .relative > .flex-col')
    cy.get(':nth-child(4) > .relative > .flex-col > .mb-14 > .text-2xl')

    //to get browse in the card
    cy.get(':nth-child(3) > .relative > .flex-col')

    cy.get('.bg-\\[\\#1B2158\\]').should('be.visible')
    cy.get('.bg-\\[\\#1B2158\\] > .relative > .max-w-xl > .bg-\\[\\#C5A05E\\]')
    cy.get('.bg-\\[\\#1B2158\\] > .relative > .max-w-xl > .bg-\\[\\#C5A05E\\]').click();

    //Opexa section
    cy.get('.bg-\\[\\#41ADFB\\]').should ('be.visible')
    cy.get('.bg-\\[\\#41ADFB\\] > .relative > .max-w-xl > .bg-\\[\\#C5A05E\\]').click();

    //FarmsAgora section
    cy.get('.bg-\\[\\#ECF9F2\\]').should('be.visible')
    cy.get('.bg-\\[\\#ECF9F2\\] > .relative > .max-w-xl > .bg-\\[\\#C5A05E\\]').click();
   //we've helped hundreds of companies: the text first then thier logos
   cy.get('.p-6').should('be.visible')
    cy.get(':nth-child(5) > .flex-col > .flex')

    //join us for a game-changing webinar
    cy.get('.space-y-4').should('be.visible')
    cy.get('.space-y-4 > .group').click();
    cy.get('.transform').should ('be.visible')

    cy.get('.newsletter-section').should('be.visible')
    cy.get('.relative > .font-sans').type('adujahglory@gmail.com')
    cy.get('.justify-between > .flex-col > .flex > .font-sans').click();

    //footer
   //company
   cy.get('.bg-\\[\\#000212\\] > .pt-16') .should('be.visible')
    cy.get('.grid > :nth-child(1) > .flex > :nth-child(1)').click();
    cy.get('.grid > :nth-child(1) > .flex > :nth-child(2)').click();
    cy.get('.grid > :nth-child(1) > .flex > :nth-child(3)').click();
    
  //who we are
  cy.get('.grid > :nth-child(2) > .flex > :nth-child(1)').click();  
  cy.get('.grid > :nth-child(2) > .flex > :nth-child(2)').click();
  cy.get('.grid > :nth-child(2) > .flex > :nth-child(3)').click();

  //Resources
  cy.get('.grid > :nth-child(3) > .flex > :nth-child(1)').click({multiple:true}); 
  cy.get('.grid > :nth-child(3) > .flex > :nth-child(2)').click({multiple:true});
  cy.get('.grid > :nth-child(3) > .flex > :nth-child(3)').click();

  //Legal
  cy.get('.grid > :nth-child(4) > .flex > :nth-child(1)').click();
  cy.get('.grid > :nth-child(4) > .flex > :nth-child(2)').click();
  cy.get('.grid > :nth-child(4) > .flex > :nth-child(3)').click();

  

})
})
