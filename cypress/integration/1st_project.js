 /// <reference types="cypress" /> 

 it ("Sample file", function()
 {
    cy.visit("https://www.google.com") // cy.visit() to open any website
    cy.get('.gLFyf').type("HP laptop").click()
    //cy.get('.gLFyf').type("Hello world Doggy.com {enter}") //cy.get() is to access or locate any object on the page
 }) // creating an it () mocha test runner

 //cy.get('.gLFyf').type("Hello world Doggy.com"), we just located the object with class name .gLFyf and typed some texts into it
// To press enter, we used the {enter} to tap enter after typing the text