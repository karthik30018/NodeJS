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


### Day 3

## Node Js Architecture

![alt text](NodejsArch.png)

# Event Queue:
- All the request are queued here.

# Event Pool:
- Watch over the event queue to check for the request, if any request it takes the request for processing.
- FIFO
- Also checks if the request is blocking or non-blocking operation.


# Non-blocking operation(Async):

- The request will be directly processed and response will be sent.

# Blocking operation:

- The request are sent to the thread pool and waits untill the thread has been asigned for processing.

# Thread pool:
- A pool which contains threads.
- Responsible for fulfilling the blocking operation.

# Work flow of blocking operation:

- When the request occurs it checks for the available thread, if any then the request will be processed by a thread and sends the response.


## Note:

- Always try to use non-blocking operation(Async).
- By default there will be 4 threads.
- The size of the thread pool depends on the CPU core.
- eg. if its a 4 core CPU then 4 threads, 8 core = 8 threads.
  
# Disadvantage of using Blocking operation:
- Scalability issue: If all the threads are occupied the new request has to wait untill any one of the thread is free.


## OS Module:

- Used to get the information about the local system.
  
  `const os = require('os')
   console.log(os.cpus().length)
  `

## Bulding HTTP server in node js

- By using http module we can create a server.
- ```const http = require('http')

const myserver = http.createServer((req,res)=>{
    console.log(req)
    res.end("Display on the browser")
    
});

myserver.listen(8000,()=>
console.log("Server is running!!"))```

# Note: The serve will load twice due to the favicon.ico

## Handling URL's in Node js

- URL - Uniform Resource Locator
- eg: https:/demo.dev/about
- hear https - a protocol (Hypertext Transfer Protocol Secure)
- demo.dev - Domain(User friendly name of an IP address)
- /about - path
- /about/user - nested path
- /about?name=karthik&id=1 - After ? is a query parameter,where we are passing name and id as parameter and & is used as seperator
- In node js to use URL we have to download external package from npmjs.com
- Download URL package.