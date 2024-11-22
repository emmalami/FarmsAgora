describe ('open Opex website', () =>{
    it('Landing page', () => {

        cy.visit ('https://www.opexconsult.com/')
        cy.get('.px-6').click ()
        cy.get('#name').type('Glory')
        cy.get('#email').type ('adujahglory@gmail.com')
        cy.get('#title').select(3)
        cy.get('#company').type('Opex Limited')
        cy.get('#role').type('Teacher')
        cy.get('#purpose').select(2)
        cy.get('#message').type('I just want to say hello')
        cy.get('button[type="submit"]').click();
        


    })





})