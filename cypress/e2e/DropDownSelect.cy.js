/// <reference types="Cypress" />

describe('Selectores Dropdown', ()=>{

    it('Drowdown with select', ()=>{

        cy.visit("https://www.ranorex.com/automated-gui-testing-tools/")
        cy.wait(5000)
        cy.url().should('include', 'ranorex.com')
        cy.get('#menu-main-mega-menu > #menu-item-109211 > a').click()
       cy.get('.et_pb_mega_menu_row_8 > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button').click
       cy.get('#menu-main-mega-menu > #menu-item-109212 > a').click()
        cy.get('#menu-main-mega-menu > #menu-item-109213 > a').click()
       
    })








})