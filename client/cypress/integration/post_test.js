describe('My First Test', () => {
    it('Site loads and posts are being retrieved from the server correctly', () => {
        cy.visit('localhost:3000')
        cy.get("html").should('contain', 'michael')
      })
    it('Like is found and can be clicked', () => {
      cy.contains('Like').click()
    })
    it('Create a post', () => {
        cy.get('#creator').type('ddddd')
        cy.get('#title').type('ddddd')
        cy.get('#message').type('ddddd')
        cy.get('#tags').type('ddddd')
        cy.get('#upload').click()
        cy.contains("ddddd")
      })
    it('Delete a post', () => {
        cy.get("#ddddd").contains('Delete').click()
        cy.get("html").should('not.contain', 'abc')
      })  
    it('Sign in page is shown', () => {
        cy.get('#signInButton').click()
        cy.url().should('contain', '/auth')
      })
    it('Main page is shown', () => {
        cy.visit('localhost:3000/auth')
        cy.get('#logo').click()
        cy.url().should('contain', 'localhost:3000')
      })    
  })