 /// <reference types="cypress" /> 

 it ("Sample file", function()
 {
    cy.visit("https://www.google.com"); // cy.visit() to open any website
    cy.get('.gLFyf').type("HP laptop {enter}");
    //cy.get('.gLFyf').type("Hello world Doggy.com {enter}") ;//cy.get() is to access or locate any object on the page
   cy.contains('Videos').click() ; 
   cy.wait(3000) // we wanna wait for 3s before clicking the element that has longest
      cy.contains('longest').click() ;
   // cy.get('.g > :nth-child(1) > [lang="en"] > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb').click();
   // cy.get('.right > :nth-child(3) > a').click();
 }) // creating an it () mocha test runner

 //cy.get('.gLFyf').type("Hello world Doggy.com"), we just located the object with class name .gLFyf and typed some texts into it
// To press enter, we used the {enter} to tap enter after typing the text