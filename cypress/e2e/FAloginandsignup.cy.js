describe('template spec', () => {
  
  it('passes', () => {
    cy.visit('https://farmsagora-web-fe-v2-983483261599.us-central1.run.app/');

    // Navigate and fill out login details
    cy.get('.gloZvy > span').click();
    cy.get(':nth-child(4) > .sc-klVQfs > .flex > .sc-dSCufp')
      .clear()
      .type('hipihi@clip.lat');
    cy.get('[style="margin: 10px 0px; width: 100%;"] > .w-full > .sc-krNlru > .flex > .sc-ibQAlb')
      .clear()
      .type('Sinoxi159#');
    cy.get('.sc-eZYNyq > .sc-iHbSHJ > span').click();

    // Repeat password entry if required
    cy.get(':nth-child(6) > .sc-krNlru > .flex > .sc-ibQAlb')
      .clear()
      .type('Sinoxi159#');
    cy.get('.sc-eZYNyq > .sc-iHbSHJ > span').click();

    // Additional form actions
    
    cy.get('.ciOTVF').click();

   
    // Post-OTP actions
    cy.get('.sc-kMkxaj').should('be.visible')
    cy.get('.my-\\[10px\\] > .w-full > .sc-krNlru > .flex > .sc-ibQAlb').click({ force: true });

    cy.get('.my-\\[10px\\] > .w-full > .sc-krNlru > .flex > .sc-ibQAlb')
      .clear()
      .type('Sinoxi159#');
    cy.get('.sc-eZYNyq > .sc-iHbSHJ > span').click();

    // Fill additional fields
    cy.get('#react-aria5828929227-\\:rd\\:').clear().type('remt');
    cy.get('.top-1 > svg > path').click();
    cy.get('.sc-eZYNyq > .sc-iHbSHJ > span').click();
    cy.get('#react-aria5828929227-\\:r15\\:').clear().type('remat');
    cy.get('#react-aria5828929227-\\:r1a\\:').clear().type('yemt');
    cy.get('#react-aria5828929227-\\:r1f\\:').clear().type('08052970788');

    // Dropdown and select options
    cy.get('#react-select-4-placeholder').click();
    cy.get('#react-select-4-input').type('nig');
    cy.get('#react-select-4-option-123').click();
    cy.get('#react-select-5-placeholder').click();
    cy.get('#react-select-5-option-8').click();

    // Finalize and submit
    cy.get(':nth-child(2) > .w-full > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg')
      .click();
    cy.get('#react-select-6-option-1').click();
    cy.get('.z-0').click();
  });

  
  /* ==== Test Created with Cypress Studio ==== */
  it.only('seller registration', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://farmsagora-web-fe-v2-983483261599.us-central1.run.app/');
    cy.get('.cmtvog > span').click();
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').clear('kisivasi@teleg.eu');
    cy.get('form.w-full > :nth-child(1) > .sc-iHmpnF > .flex > .sc-eyvILC').type('kisivasi@teleg.eu');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('Kisivasi1#');
    cy.get('.my-\\[10px\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Kisivasi1#');
    cy.get('.sc-ktJbId > .sc-iHbSHJ > span').click();
    cy.get('[href="/seller/home"] > svg > path').click({force:true});
    cy.get('.flex-col > .flex > a > .bg-\\[\\#f0881e\\]').click();
    cy.get('form > :nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('E');
    cy.get('form > :nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Egisto Ltd');
    cy.get(':nth-child(1) > .border-\\[4px\\]').check();
    cy.get('#react-select-2-placeholder').click();
    cy.get('#react-select-2-option-0').click();
    cy.get('.max-\\[800px\\]\\:flex > .flow-row > .custom-file-upload > .text-green-900').click();
    cy.get('.max-\\[800px\\]\\:flex > .flow-row > .custom-file-upload > input').click({force:true});
    cy.get('.lg-w-3\\/5 > .w-full > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('.gap-1 > .flow-row > .custom-file-upload > .text-green-900 > svg').click();
    cy.get('.gap-1 > .flow-row > .custom-file-upload > input').click({force:true});
    cy.get(':nth-child(5) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('E');
    cy.get(':nth-child(5) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('Eggisto and SOns');
    cy.get('#description').click();
    cy.get('.relative > .text-green-900').click();
    cy.get('.relative > .hidden').click({force:true});
    cy.get('.overflow-hidden > .text-green-900').click();
    cy.get(':nth-child(1) > .overflow-hidden > .hidden').click({force:true});
    cy.get('.overflow-hidden > .text-green-900').click();
    cy.get(':nth-child(1) > .overflow-hidden > .hidden').click({force:true});
    cy.get('.overflow-hidden > .text-green-900').click();
    cy.get(':nth-child(1) > .overflow-hidden > .hidden').click({force:true});
    cy.get('.lg\\:w-\\[60\\%\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('1');
    cy.get('.lg\\:w-\\[60\\%\\] > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('1, PPY street Adamawa');
    cy.get('#react-select-4-placeholder').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('.lg\\:w-3\\/5 > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-5-option-2').click();
    cy.get('.mb-2.items-center > .lg\\:w-2\\/5 > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-6-option-1').click();
    cy.get('.md\\:mt-3 > .sc-iHbSHJ > span').click();


    
    cy.get('.mt-3 > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-7-option-1').click();
    cy.get('#\\36 712d249d2c9020984d2e3d5').check();
    cy.get('.mb-4.text-sm > .w-full > .basic-single > .select__control > .select__value-container > .select__input-container').click();
    cy.get('#react-select-8-option-0').click();
    cy.get(':nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('kisivasi@teleg.eu');
    cy.get(':nth-child(1) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('kisivasi@teleg.eu');
    cy.get(':nth-child(2) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').clear('0');
    cy.get(':nth-child(2) > .w-full > .sc-iHmpnF > .flex > .sc-eyvILC').type('08052950677');
    cy.get(':nth-child(1) > .border-\\[4px\\]').check();
    cy.get('#description').click();
    cy.get('.group > .flex').click();
    cy.get('.group > .flex').click();
    /* ==== End Cypress Studio ==== */
  });
});
