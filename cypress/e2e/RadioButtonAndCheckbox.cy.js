
describe("Check UI Elements", ()=>{

it("Checkin Radio Buttons", ()=>{

        cy.visit("https://demo.guru99.com/test/newtours/index.php")

        cy.get("input[name='userName']").type("edison.villegas@sqasa.co")
        cy.get("input[name='password']").type("Paco2024") 
        cy.get("input[value='Submit']").click()
        cy.xpath("//a[normalize-space()='Flights']").dblclick()
        cy.get('[value="oneway"]').click()
       cy.get('b > select').select('2').should('have.value', '2')
       cy.get('[name="fromMonth"]').select('February')
       .should('have.value', '2')
       cy.get('[name="toMonth"]').select('August')
       .should('have.value', '8')
       cy.get('[value="First"]').click()
        cy.get('td > input').click()
        
       
        
        
        

        })

        

})