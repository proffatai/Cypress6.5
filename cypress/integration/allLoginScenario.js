 /// <reference types="cypress" /> 


 // Testing invalid username and valid password
 it.only ("Invalid Login", function() // we only want to run this test case
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('Ladmin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })

 // Testing valid username and valid password
 it ("Valid Login", function()
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })

 // Testing valid username and invalid password
 it ("Inalid Login", function()
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })

 // Testing invalid username and invalid password
 it ("Inalid Login", function()
 {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })