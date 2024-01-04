describe('My First Test', () => {
    it('test1', () => {

        cy.visit("https://demo.guru99.com/test/newtours/index.php")

        cy.title().should('eq', 'Welcome: Mercury Tours')
      
    })

    it('test2', () => {

        cy.visit("https://demo.guru99.com/test/newtours/index.php")

        cy.title().should('eq', 'guru98')
      
    })






  })