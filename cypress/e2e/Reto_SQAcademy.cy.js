describe("Reto SQA", ()=>{

it("Reto SQAcademy", ()=>{

        cy.visit("https://www.carulla.com/")
        cy.wait(5000)
        cy.url().should('eq', 'https://www.carulla.com/')
        cy.url().should('contain', 'carulla')
        cy.wait(5000)
        cy.xpath("//input[@id='downshift-2-input']").type("vinos").click()
        cy.get('#downshift-1-input').select('Medellín').should('have.value', 'Medellín')
        cy.get('#downshift-1-input').select('Carulla San Lucas').should('have.value', 'Carulla San Lucas')
        cy.get('[value="Confirmar"]').click()
        cy.xpath("//div[@id='3074532']//span[contains(@class,'exito-vtex-components-4-x-buttonText')][normalize-space()='Agregar']").click()
        cy.xpath("//div[@id='916853']//span[contains(@class,'exito-vtex-components-4-x-buttonText')][normalize-space()='Agregar']").click()
        cy.xpath("(//span[contains(@class,'exito-vtex-components-4-x-buttonText')][normalize-space()='Agregar'])[4]").click()
        cy.xpath("//a[@class='exito-header-3-x-minicartLink']//*[name()='svg']").click()
        cy.get(".Light").contains("Vino Tinto Albacora")
        cy.get(".Light").contains("Vino Blanco Rueda Marques de riscal x 750ml")
        cy.get(".Light").contains("Vino Tinto Malbec Varietal Norton x 750 ml")



      




        
        

        
        
       })
       
       
       
    })