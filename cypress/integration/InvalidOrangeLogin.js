 /// <reference types="cypress" /> 

// Testing invalid username and password
 it ("Invalid Login", function()
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('Ladmin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })