## Description of folder structure
Features folder holds default data that we wanna reuse throughout the test. Just like creating a variable and we only need the varName to acces the value

Cypress.json holds global configuration

Support folder is where we can create our custom commands or override some of the existing commands to fit our need

Integration folder is where write our test scripts. We just need to create a js or ts file inside the integration folder

If we add any external plugins, we can store them inside the plugins folder. But in cypress 10, all external plugins are added to the cypress.config.js file, either in the e2e block or we create a new component block

## Setting Base URL we want to always visit
`baseUrl:'https://www.facebook.com',` <= This is used to set the base url we want to always visit. It is should be written inside the e2e:{} of the cypress.config file. So we can now call this url in any spec file as `cy.visit('/')`

## Other points
 ///<refrence types="cypress" />  We write this line of code on line 1 of the js or ts file you just created. It allows vscode to give know that we are about to write cypress scripts and makes vscode provide us wuth the needed autocompletion in cypress.

To write a test in cypress, we need a test runner called mocha which comes built-in with cypress. Example it()

cy is an object of cypress. We can access all cypress attributes and methods via the cy command.

After writing your scripts, to run your test, run the command `npx cypress open`

Note: Whenever we make any changes to the script and save the file. Those changes get reflected immediately on the cypress app. We can add some delays to the time it takes to reflect the changes made on the source code. Just proceed to Cypress.json file and set "watchForFileChanges" to be false.Then we will need to always manually refresh the page before we can see the file changes

# How to access specific element on the AUT
Locate and click on the Open selector playground icon. This highlights the whole app
Click on any element on the web app, a cypress command is provided
Then copy the command and paste inside ur .js file and run it

-[] All we need do is either to get the know the class name of the element or its id then we can use either cy.get('id') or cy.get('className') to locate the element. We can also use the text name via cy.contains('textWeAreLookingFor')

## How to access elements via its css class name under a Cypress test
Run the cypress test
Select the Open Selector Playground icon and then proceed to select any of the objects on the preview UI to get the selector code for copying
Keep the open playground selector on cy.get() and click on the element you want to access
Head to VScode and paste the copied code as desired

## Searching and clicking on a specific text on the AUT
cy.contains('textName') // this will focus on any where there is textName on the AUT, then we can append .click() to click such text.
We could also use the cy.get() to access the text. Just that we would have to copy the css from the AUT

# Adding custom timeouts
# Command level
cy.get('.className, {timeouts:5000}').type('Jeloo{enter}')
## Global level : Adding a timeout for the entire application
visit the cypress.json file and enter the following commands
"defaultCommandTimeout": 5999 // we have chosen to set the timeout to 5999 against the default 40000 i.e 4secs 
NB: timeout is simply the time taken for cypress to wait for a response from an action before throwing a duration assertion error

# Running multiple test case in a single file
We can create the it() test runner but we have to use the .only attribute so we can run the 1 test case at a time
e.g it.only ("Google", function()
 {
    cy.visit('https://www.google.com');
 }
 )

# Finding Descendant element
Let's assume that we want to access a button `Quit` which is inside a list of buttons with class name `hmm`. Now assuming on cypress test, we are unable to directly access the button but we could only access its parent div which has a class name `hmm`. We can proceed to access the decendant or child element's property via the find('identity of the element i.e className or id'). We need to visit the actual website outside cypress in other to find out the id/className of the button (Assuming the button has an id=`yea`), then  we can proceed to access the child button on our cypress script via

cy.get(`.hmm`).find('#yea')  -> firstly, we accessed the parent, which has the list of buttons whose class name is `hmm`. Then we proceeded to use the find command to search for a child or decendant with id =`yea`

## Force clicking in cypress to close an opened modal

Let's say we a modal is opened, and we want to click out so as to access another component, we need to force click. Firstly, we need to access that element that we want to locate using cy.get('selector').click({force:true}). Then we can proceed to access the component again, cy.get('selector').type('hello world')

## Selecting an option from a <select> tag

Say a select tag has 3 options namely: Man, Woman, Other with some class / id nameas shown below
<select>
   <option value="Hongkong CURA Healthcare Center">Hongkong CURA Healthcare Center</option>
   <option value="Seoul CURA Healthcare Center">Seoul CURA Healthcare Center</option>
   <option value="Tokyo CURA Healthcare Center">Tokyo CURA Healthcare Center</option>
</select>
This will appear as a dropdown on the UI, to be able to use cypress to select / get any of these, we can visit cypress select for more information or use the below commands, `cy.get('select').select('value of the option we want to select')`
 
 e.g `cy.get('select').select('Tokyo CURA Healthcare Center')` This means we want to select the third option