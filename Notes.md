### Day 1

## Defination: Node js ia an opensource and crossplatform runtime environment.

## Why NodeJs: 

- Can run js outside of the browser.
- Js can talk to native machine because of c++ (file handling etc.)
- You can create webserver in JS language.

## Disadvantages:

- Cannot use the DOM concept and browser related concept.
  
## Installation and setUp

- www.nodejs.org
- download node package (LTS)
- Check the version in terminal to verify the setup (node -v)

## First code

- npm init
- create a starting point of the project to execute (index.js)
- Install nodemon (npm i nodemon)
- In package.json define the script run command(like "start": "node index.js")
- If other then start then we have use this command to run it (npm run name of the script)

### Day 2

## Modules 

- Modules are functions or package
- To import a module we have to export the module which we want to import

## Importing a module

- Eg: `const name = require('file/package')`
- Destructuring `const {add,sub} = require('file/package')`

## Exporting a module 

- Two types

# Default export

- `module.exports = {fun1,fun2}`

# Object export

- `exports.add = (a,b) => a+b`


## File Handler:

- Refere FileHandler.js