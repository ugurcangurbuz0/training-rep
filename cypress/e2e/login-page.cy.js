import { hide_req } from '../support/hide-fetch-req.js'
import { uncaught_exceptions } from '../support/uncaught-exception.js'

describe('Check Login Page', () => {

    it('Check Login Fields', () => {

        //Visit url and enter the relation page
        cy.visit('https://thetraininghub.com')
        cy.get('.nav-navbar.another_links').contains('Log in').click()

        //Check page
        cy.get('.white_box_login > p').should("have.text", "Don't forget to check out this months free courses")

        //Click Login button for check mandatory fields message.
        cy.get('#submitLogin').click()

        //Check username message
        cy.get('.error[for="username"]').should('have.text', "This field is required")

        //Check password message
        cy.get('.error[for="password"]').should('have.text', "This field is required")

        //Type username
        cy.get('input.error[name="username"]').type("centrontest@test.com")

        //Type password and check password hide/show button
        cy.get('input.error[name="password"]').type("password")
        cy.get('.passwordonoff').click()
        cy.get('#password').should('have.attr', 'type', 'text');
        cy.get('.passwordonoff').click()
        cy.get('#password').should('have.attr', 'type', 'password');

        //Click Login and check error plancheck
        cy.get('#submitLogin').click()
        cy.get('#login_errors').should('have.text', 'These credentials do not match our records.')
    });

    it('Forgot Username', () => {
        cy.visit('https://thetraininghub.com')
        cy.get('.nav-navbar.another_links').contains('Log in').click()
        cy.contains('Forgot username?').click()

        //Check 2 buttons
        cy.contains('Receive username via mobile number').should('have.text', 'Receive username via mobile number')
        cy.contains('Receive username via email address').should('have.text', 'Receive username via email address')

        //Click email button and fill text field, lastly send mail
        cy.contains('Receive username via email address').click()
        cy.get('input[name="useremail"]').type('testuser@test.com')
        cy.get('.input-field > .btn.btn-red.w-100.rightarrow-icon').click()

    });
})