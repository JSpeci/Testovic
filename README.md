# Testovic
Initial project with example solution and basic data.

* Create github profile or sign up to your profile
* Make fork from public repo JSpeci/Testovic as public repo
* Read instructions

## Instructions

* install node.js to your computer
* open terminal (iam using terminal in VSCode)
* recommended IDE is VSCode
* go to https://www.telerik.com/kendo-react-ui/
* Start free trial account, register
* go to https://www.telerik.com/kendo-react-ui/my-license/
* On this page you can get your trial 30day trial key
* Download that key and paste it next to package.json file
* terminal: **npm install --save @progress/kendo-licensing**
* terminal: **npx kendo-ui-license activate**
* terminal: in folder with package.json run **npm install**
* it takes some time to download and install all dependencies listed in package.json file
* now you should be able to build it
* terminal: **webpack**
* now you have dist folder next to src folder
* terminal: npm run start
* open web browser and go to localhost:1234/dist

## Test Level1 instructions
* Fix css on monitoring library detail
* Open another terminal and run: **npx jest**, should be ok
* implement two tests in LibrariesListQuery.tests ( use jest, react-testing-library, enzyme, etc..)
* Make alive create new monitoring library dialog - it adds library to dummy server
* write tests: 
    * if dialog is shown after New Monitoring Library button clicked
    * if dialog has name field
    * if new library was added to dummy server libs array
    * if new library is shown in table
* another tests:
    * if table has columns Name, CountOfPools, Questions
* write empty/skipped tests on appearance for monitoring library detail
* Do all with respect to current structure of app
## Test Level2 instructions
* Add Are you sure dialog, use Kendo react dialogs, for Delete Library button on Lib detail
* write empty tests with named headers expectations for this command
* Try to implement tests - use MobxProvider to provide store to component in test
* Make alive delete command
