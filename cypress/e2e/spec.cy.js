describe('visit Opexa and farmsagora webpages', () => {
  it('passes', () => {
    cy.visit('https://opexa-user-client-staging-833597492714.us-central1.run.app/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it.only('farmsagora test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://farmsagora.com/');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/corporate"] > .sc-fPXMVe > .sc-ikkxIA > .sc-dAbbOL > button').click();
    cy.get('.text-3xl').should('be.visible');
    cy.get('[flip=""] > .flex-col').should('be.visible');
    cy.get('[flip=""] > :nth-child(1) > .relative > .object-center').should('be.visible');
    cy.get(':nth-child(3) > .sm\\:items-end > .text-2xl').click();
    cy.get(':nth-child(3) > .sm\\:items-end').click();
    cy.get(':nth-child(3) > .sm\\:items-end').should('be.visible');
    cy.get('.bg-\\[\\#cfc42856\\] > .flex > .bg-\\[\\#F68B1E\\]').should('be.enabled');
    cy.get(':nth-child(8) > .sm\\:items-end > .sm\\:text-right').click();
    cy.get(':nth-child(8) > .sm\\:items-end > .sm\\:text-right').should('be.visible');
    cy.get(':nth-child(1) > .sc-bbSZdi > .sc-fBWQRz > a > svg').click();
    cy.get(':nth-child(2) > .w-full > :nth-child(1) > .my-8 > .\\[object').click();
    cy.get(':nth-child(2) > .w-full > :nth-child(1) > .my-8 > .\\[object').click();
    cy.get(':nth-child(2) > .w-full > :nth-child(1) > .my-8 > .sm\\:w-full').click();
    cy.get('.text-\\[\\#283E91\\]').click();
    cy.get('[href="/market?type=all"] > .my-8 > .\\[object').click();
    cy.get('[href="/market?type=all"] > .my-8').should('be.visible');
    cy.get('[href="/market?type=stores"] > .my-8 > .\\[object').click();
    cy.get('[href="/market?type=stores"] > .my-8 > .\\[object').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})