describe('XpathLocators', () =>{

it('find no products', ()=>{

    cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get("input[value='Submit']").should('have.lenht', 6)



})



})