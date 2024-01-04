describe("Assertions demo", () =>{

    it("Implicit assertions", ()=>{

        cy.visit("https://demo.guru99.com/test/newtours/index.php")

        // should   and  implicit
        //cy.url().should('include', 'demo.guru99.com')
        //cy.url().should('eq', 'https://demo.guru99.com/test/newtours/index.php')
        //cy.url().should('contain', 'demo')

       /* cy.url().should('include', 'demo.guru99.com')
        .should('eq', 'https://demo.guru99.com/test/newtours/index.php')
        .should('contain', 'demo')*/

        cy.url().should('include', 'demo.guru99.com')
        .and('eq', 'https://demo.guru99.com/test/newtours/index.php')
        .and('not.contain', 'demo1')



    })



})