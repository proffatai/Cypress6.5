 /// <reference types="cypress" /> 

// Testing valid username and password
it ("Valid Login", function()
{
   cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
   cy.get('#txtUsername').type('admin')
   cy.get('#txtPassword').type('admin123')
   cy.get('#btnLogin').click()
   cy.get('#menu_admin_viewAdminModule > b').click()
   cy.get('#btnAdd').click()
   cy.get('#systemUser_employeeName_empName').type('David Morris')
   cy.get('#systemUser_userName').type('Ibraz511')
   cy.get('#systemUser_password').type('dirLix#430')
   cy.get('#systemUser_confirmPassword').type('dirLix#430')
   cy.get('#btnSave').click()


})