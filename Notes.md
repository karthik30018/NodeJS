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


### Day 4

## HTTP Methods

- Get
- Post
- Put
- Patch
- Delete 

### GET

- When you want to get some data from the server.

### POST

- When you want to send and mutate some data in server.
- Create a new resources.
- eg. Form etc.

### PUT

- PUT is used to send data to a server to create/update a resource.
- Also used to overwrite all fields.

### PATCH

- This request is made when we want to change the existing data.
- The PATCH is used to replace only the information sent in the call.

### DELETE

- To delete a data.

### Difference between POST and PUT 

- The difference between POST and PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result.
- In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.


## Express Js (Framework):

- Fast, unopinionated, minimalist web framework for Node js.

## Versioning in Node js

- Current Express js version - ^4.19.2

- ^ (It is for package.json while installing npm module based on the package.json, it will make sure the 1st part should remain same)- Compatable with version.
- ~ - it make sure both first and second part remain same while installing npm module based on package.json.
- If no symbol then the version is fixed.

- 1st part(Major release/ Breaking Update) -> 4  
  
- 2nd part((Recommended) bug or security fix)-> 19 When new feature has been added or bug fix


- 3rd part(Minor fixes)(optional) -> 2 
  

## REST API

- RESTfull API or REST API
- Representational State Transfer(REST API) 
- Standard rules to follow

# Rules:

# Rule 1:

- ![alt text](RESTArch.png)
- Server and client(Browser or mobile) are seperate different entities, which does not depends on each other.
- ie. Server should not depend on client or vice versa.
- ![alt text](RESTArch1.png)
  
- If the client request for the data and the server fetches from DB and process(SSR - Server Side Rendering) it in the html form or any other then it is dependent architecture.
- It does not support cross-platform 
- Faster compare to independent due to SSR

- Similarly, if the  client request for the data and the server fetches from DB and sends the raw data(JSon(latest) or xml(oldest)) so the client can do whatever they want on the client side(CSR - Client Side Rendering) it is called Independent architecture.
- Support cross-platform
- Due to CSR slower compare to SSR (Because the raw data has to be rendered in client side)
- Followed by REST API.

# Rule 2:

- Always respect all HTTP request.
- Eg. Instead of patch request don't use post request to update the existing entry.


### Day 5

## Building a REST API's using NODE JS and EXPRESS JS

- Refer Task.txt contains the details of route which i am creating.
- For data visit the website named [Mokaroo](https://www.mockaroo.com/)
- Refer server.js for the code
- Created a middleware to handle incomming data from the browser.

## POSTMAN 

- To test the API routes

# Status

- 200 - ALL OK


### Day 6

## Middleware

- If middleware are used then the data sent from the client is first sent to middleware, which will perform some processing on the data then the requset is forwarded to backend.
- Note: Some time the request can be sent back to client without sending to the server due to some reason.
- The response from the server is directly sent to client.
- We can use multiple middleware.
- For each req and res the middlewares are executed.
- [Reference](https://expressjs.com/en/guide/using-middleware.html)
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

- Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.


# Creating a middleware

- By the help of app.use() we can create middleware.
- Syntax:
```
app.use((req,res,next)=>{

next()
})
```
- next : Reference to the next middleware in the stack
- If we didn't call the next() function then it won't go to the next function, the execution will stuck there.
- We can also send the req from one function to another.
```
app.use((req,res,next)){
  req.myName = "Karthik";
  next()
}

app.use((req,res,next)=>{
console.log(req.myName)
next();
})
```


### Day 7

## HTTP Headers

- HTTP headers are an important part of the API request and response as they represent the meta-data associated with the API request and response.
- Headers carry information for the request and the response body.
- [built in header list](https://flaviocopes.com/http-request-headers/)

# Note: Always add X to custom headers.

## HTTP Status code:

- [doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  
  # Informational Responses(100 - 199)
  # Successful responses(200 - 299)
  # Redirection messages(300 - 399)
  # Client error responses(400 - 499)
  # Server error responses(500 - 599)

# Standard Response Code

- 200: All OK
- 201: Created (Post or Put)  when we create something on the server.
- 202: Accepted
- 204: No Content
- 400: Bad request
- 401: Unauthorized
- 402: Payment Required
- 403: Forbidden (If client does not have access rights to the content)
- 404: Not Found
- 500: Internal server error
- 501: Not implemented (If the method is not implemented)
- 502: Bad gatway
- 503: Server unavailable
- 300: Multiple choices
- 301: Moved Permanently

### Day 8

## MongoDb

- No-SQL document based database.
- Strong support for aggregation pipes.
- Works on BSON format.
- Best for node application.

## Architecture

![alt text](MongoAec.png)

# Some commands:

- mongosh
- showdbs
- use <db name>
- show collection 
- db.<collection name>.find({})
- db.<collection name>.insert()

## Connecting MongoDb to Node JS

- Install mongoose

# Mongoose Schema:

- Define schema 
- create Model to do CRUD operation.
  

### Day 9

## Model View Controller(MVC):

- Controller manipulate the model.
- Model updates the view.

# Steps:
- Create Models
- Create Routes
- Create controller
- create Middleware

-> server.js(app.use('/api/user',userRouter)) -> Routers -> Controller -> Models -> View.

### Day 10

## Project

# [LinkShrink](https://github.com/karthik30018/LinkShrink)

