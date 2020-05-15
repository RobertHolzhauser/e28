describe('DreamMachine', () => {
    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h1', 'The Dream Machine')
    })
})