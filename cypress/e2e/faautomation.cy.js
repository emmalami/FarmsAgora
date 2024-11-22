describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  
  it('visit farmsagora', function() {
    //clicking actions on the landing page not including book a demo, login and register at the header*/
    cy.visit('https://farmsagora.com/');
    cy.get(':nth-child(1) > .sc-bbSZdi > .sc-fBWQRz > a > svg').click();
    cy.get('.sc-JrDLc > :nth-child(2) > .sc-bbSZdi').click();
    cy.get('.sc-JrDLc > :nth-child(3) > .sc-bbSZdi').click();
    cy.get(':nth-child(3) > .sc-bbSZdi > .sc-fBWQRz > a > svg').click();
    cy.get('a > .flex').as('btn').click();
    cy.get('@btn').click();
    cy.get(':nth-child(1) > [data-testid="footer-groupLink"] > :nth-child(1) > .hover\\:underline').should('exist').should('be.visible') 
    cy.get(':nth-child(1) > [data-testid="footer-groupLink"] > :nth-child(2) > .hover\\:underline').click();
    cy.get(':nth-child(2) > [data-testid="footer-groupLink"] > :nth-child(1) > .hover\\:underline').click();
    cy.get(':nth-child(1) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(3) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(5) > [data-testid="flowbite-accordion-arrow"] > path').click({force:true});
    cy.get(':nth-child(7) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(21) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(19) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(17) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(15) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(13) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(11) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get(':nth-child(9) > [data-testid="flowbite-accordion-arrow"]').click();
    cy.get('[data-testid="flowbite-accordion"] > :nth-child(7)').click();
    cy.get(':nth-child(3) > [data-testid="footer-groupLink"] > :nth-child(1) > .hover\\:underline').click();
    /* ==== End Cypress Studio ==== */
  });

  //to fill the book a demo form
  it('passes', () => {
    cy.visit('https://farmsagora.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.underline').click();
    cy.get('.space-y-5 > :nth-child(1) > :nth-child(1) > .rounded-lg').clear('john ');
    cy.get('.space-y-5 > :nth-child(1) > :nth-child(1) > .rounded-lg').type('john ');
    cy.get('.space-y-5 > :nth-child(1) > :nth-child(2) > .rounded-lg').clear('doe');
    cy.get('.space-y-5 > :nth-child(1) > :nth-child(2) > .rounded-lg').type('doe');
    cy.get(':nth-child(2) > :nth-child(1) > .rounded-lg').clear('johndoe@gmail.com');
    cy.get(':nth-child(2) > :nth-child(1) > .rounded-lg').type('johndoe@gmail.com');
    cy.get(':nth-child(2) > :nth-child(2) > .rounded-lg').clear('0');
    cy.get(':nth-child(2) > :nth-child(2) > .rounded-lg').type('08052950681');
    cy.get('.space-y-5 > :nth-child(3) > .rounded-lg').clear('J');
    cy.get('.space-y-5 > :nth-child(3) > .rounded-lg').type('Johndoe Mans');
    cy.get(':nth-child(4) > .rounded-lg').clear('I');
    cy.get(':nth-child(4) > .rounded-lg').type('I want to know more about FA');
    cy.get('.h-\\[660px\\] > :nth-child(10)').click();
    cy.get('.md\\:w-\\[40\\%\\] > .md\\:text-md').click();
    cy.get('#\\[object\\ Object\\]').click();
    cy.get('.gap-y-0\\.5 > :nth-child(26)').click();
    /* ==== End Cypress Studio ==== */
  })



  it('visit farmsagora', function() {
    //landing page-login-my account-my orders-logout* ==== Generated with Cypress Studio ==== */
    cy.visit('https://farmsagora.com/');
    cy.get('.cmtvog > span').click();
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').clear('adujah.glory@opexconsult.co.uk');
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').type('adujah.glory@opexconsult.co.uk');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('1');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('1234567891');
    cy.get('.sc-ktJbId > .sc-iHbSHJ > span').click();
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').click();
    cy.get('.sc-gfoqjT > svg > path').click({force:true});
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('12345678910');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('12345678910');
    cy.get('.sc-ktJbId > .sc-iHbSHJ > span').click();
    cy.get('[href="/settings"] > li').click({force:true});
    cy.get('[href="/orders"] > li').should('exist');
    cy.wait(1000);  // Wait for 1 second
    //cy.get('[href="/market/cart"] > li').as('btn').click({ force: true });
    
    cy.get('.mt-4 > .inline-flex').click();
    /* ==== End Cypress Studio ==== */
    
  })
    


  it.only('seller registration', function() {
    /* Visit the platform's home page */
    cy.visit('https://farmsagora-web-fe-v2-983483261599.us-central1.run.app/');
    
    /* Click on the login button */
    cy.get('.cmtvog > span').click();
    
    /* Clear any existing value in the email field and enter the user email */
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').clear('kisivasi@teleg.eu');
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').type('kisivasi@teleg.eu');
    
    /* Clear any existing value in the password field and enter the password */
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('Kisivasi1#');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Kisivasi1#');
    
    /* Click on the login submit button */
    cy.get('.sc-ktJbId > .sc-iHbSHJ > span').click();
    
    /* Navigate to the seller link at the top right of the marketplace */
    cy.get('[href="/seller/home"] > svg > path').click({ force: true });
    
    /* Click on the option to start seller registration */
    cy.get('.flex-col > .flex > a > .bg-\\[\\#f0881e\\]').click();
    
    /* Fill in the business name */
    cy.get('form > :nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('E');
    cy.get('form > :nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Egisto Ltd');
    
    /* Select the first business type option */
    cy.get(':nth-child(1) > .border-\\[4px\\]').check();
    
    /* Select a category for the business */
    cy.get('#react-select-2-placeholder').click();
    cy.get('#react-select-2-option-0').click();
    
    /* Click to upload a document */
    cy.get('.max-\\[800px\\]\\:flex > .flow-row > .custom-file-upload > .text-green-900').click();
    cy.get('.max-\\[800px\\]\\:flex > .flow-row > .custom-file-upload > input').click({ force: true });
    
    /* Select an option from a dropdown (e.g., region or sector) */
    cy.get('.lg-w-3\\/5 > .w-full > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg').click();
    cy.get('#react-select-3-option-0').click();
    
    /* Upload additional supporting documents */
    cy.get('.gap-1 > .flow-row > .custom-file-upload > .text-green-900 > svg').click();
    cy.get('.gap-1 > .flow-row > .custom-file-upload > input').click({ force: true });
    
    /* Fill in additional business information */
    cy.get(':nth-child(5) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('E');
    cy.get(':nth-child(5) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Eggisto and SOns');
    
    /* Click to add a description (if applicable) */
    cy.get('#description').click();
    
    /* Interact with file upload elements for images or documents (forcing clicks since inputs are hidden) */
    cy.get('.relative > .text-green-900').click();
    cy.get('.relative > .hidden').click({ force: true });
    cy.get('.overflow-hidden > .text-green-900').click();
    cy.get(':nth-child(1) > .overflow-hidden > .hidden').click({ force: true });
    
    /* Repeat clicks for multiple file uploads */
    cy.get('.overflow-hidden > .text-green-900').click();
    cy.get(':nth-child(1) > .overflow-hidden > .hidden').click({ force: true });
    
    /* Provide the business address */
    cy.get('.lg\\:w-\\[60\\%\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('1');
    cy.get('.lg\\:w-\\[60\\%\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('1, PPY street Adamawa');
    
    /* Select additional dropdown options for location or settings */
    cy.get('#react-select-4-placeholder').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('.lg\\:w-3\\/5 > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-5-option-2').click();
    cy.get('.mb-2.items-center > .lg\\:w-2\\/5 > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-6-option-1').click();
    
    /* Submit the registration form */
    cy.get('.md\\:mt-3 > .sc-iHbSHJ > span').click();
});

  })