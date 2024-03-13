import { hide_req } from '../support/hide-fetch-req.js'
import { uncaught_exceptions } from '../support/uncaught-exception.js'

describe('Check Contact Us Page', () => {

    it('Check Contact Us Form', () => {
        // Visit and go to Contact Us page
        cy.visit('https://thetraininghub.com')
        cy.get('.collapsible-header').contains('Communications').click()
        cy.get('li.active > .collapsible-body').contains('Contact Us').click()
        cy.get('.title2').should("have.text", 'Contact Us')

        //Fill mandatory fields
        cy.get('#contact_form_company_name').type('Centronit Test Company')
        cy.get('#contact_form_user_name').type('Centronit Test Username')
        cy.get('#contact_form_fname').type('Test Firstname')
        cy.get('#contact_form_lname').type('Test Lastname')
        cy.get('#contact_form_contact_number').type('00000000')
        cy.get('#contact_form_email').type('testmail@centronit.com')
        cy.get('#contact_form_overview').type('Test Further Information')
        //cy.get('#btn_contact_form_form').click()
    })

})
