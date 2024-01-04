describe('CSSLocators', () => {

it("csslocators", () =>{

        cy.visit("https://demo.guru99.com/test/newtours/index.php")
        //cy.visit("http://automationpractice.com/index.php")

    //cy.get("#search_query_top").type("T_Shirts") // busca por id
    cy.get("input[name='userName']").type("edison.villegas@sqasa.co")
    cy.get("input[name='password']").type("Paco2024") // Assertions
    cy.get("input[value='Submit']").click()




})



})
