We create our tests inside the integration folder. You can delete the examples folder.

If we add any external plugins, we can store them inside the plugins folder.

Steps to commence tests on cypress

1. Create a js file inside the integration folder
2. ///<refrence types="cypress" />  #write this line of code on line 1 of the js file you just created

Line 1 tells the IDE to allow autocompletion from the cypress library.

To write a test in cypress, we need a test runner called mocha which comes built-in with cypress. Example it()

cy is an object of cypress. We can access all cypress attributes and methods via the cy command.

After writing your scripts, to run your test, run the command `npx cypress open`

Note: Whenever we make any changes to the script and save the file. Those changes get reflected immediately on the cypress app. We can add some delays to the time it takes to reflect the changes made on the source code. Just proceed to Cypress.json file and set "watchForFileChanges" to be false.Then we will need to always manually refresh the page before we can see the file changes

# How to access specific element on the AUT
Locate and click on the Open selector playground icon. This highlights the whole app
Click on any element on the web app, a cypress command is provided
Then copy the command and paste inside ur .js file and run it


# How to access elements via its css class name under a Cypress test
Run the cypress test
Select the Open Selector Playground icon and then proceed to select any of the objects on the preview UI to get the selector code for copying
Keep the open playground selector on cy.get() and click on the element you want to access
Head to VScode and paste the copied code as desired

# Adding custom timeouts
# Command level
cy.get('.className, {timeouts:5000}').type('Jeloo{enter}')
# Global level : Adding a timeout for the entire application
visit the cypress.json file and enter the following commands
"defaultCommandTimeout": 5999 // we have chosen to set the timeout to 5999 against the default 40000 i.e 4secs 
NB: timeout is simply the time taken for cypress to wait for a response from an action before throwing a duration assertion error

# Searching and clicking on a specific text on the AUT
cy.contains('textName') // this will focus on any where there is textName on the AUT, then we can append .click() to click such text.
We could also use the cy.get() to access the text. Just that we would have to copy the css from the AUT

# Running multiple test case in a single file
We can create the it() test runner but we have to use the .only attribute so we can run the 1 test case at a time
e.g it.only ("Google", function()
 {
    cy.visit('https://www.google.com');
 }
 )