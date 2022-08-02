 /// <reference types="cypress" /> 

// Testing valid username and password
 it ("Valid Login", function()
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })