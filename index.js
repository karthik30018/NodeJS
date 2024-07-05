//Destructuring an import 
{/**
    const {add,sub }= require('./Module')
console.log(add(5,5))
console.log(sub(8,5))
 */}

// Normal import
{/** 
    const add = require('./Module')
    console.log(add.add(5,20))
    */}

{/** OS Module
const os = require('os')
console.log(os.cpus().length)
*/}

{/**Bulding a server 

const http = require('http')
const fs = require ('fs')

const myserver = http.createServer((req,res)=>{
    // res.end("Hello")
    const log = `${Date.now()} : ${req.url} \n`
    fs.appendFile('log.txt',log, (err)=>{
          if(err){
            console.log(err)
          }else{
            switch(req.url){
                case '/':
                    res.end('Home')
                    break;
                case '/about':
                    res.end('About')
                    break;
                case '/contact':
                    res.end('Contact')
                    break;
                default:
                    res.end('404 Not found!!')
            }
          }
    })
});

myserver.listen(8000,()=>
console.log("Server is running!!"))

*/}

{/**Handling URL's 

const http = require('http')
const fs = require ('fs')
const url = require('url');


const myserver = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    if(req.url == '/favicon.ico'){
       return res.end()
    }
    // res.end("Hello")
    const log = `${Date.now()} : ${req.url} \n`
    fs.appendFile('log.txt',log, (err)=>{
          if(err){
            console.log(err)
          }else{
            switch(myUrl.pathname){
                case '/':
                    res.end(`Welcome to Home page ${myUrl.query.name}`)
                    break;
                case '/about':
                    res.end(`Welcome to About page ${myUrl.query.name}`)
                    break;
                case '/contact':
                    res.end(`Welcome to Contact page ${myUrl.query.name}`)
                    break;
                default:
                    res.end('404 Not found!!')
            }
        }
        })
    
});

myserver.listen(8000,()=>
console.log("Server is running!!"))

*/}


{/** HTTP Methods 


const http = require('http')
const fs = require ('fs')
const url = require('url');


const myserver = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    if(req.url == '/favicon.ico'){
       return res.end()
    }
    // res.end("Hello")
    const log = `${Date.now()} : ${req.url} \n ${req.method}`
    fs.appendFile('log.txt',log, (err)=>{
          if(err){
            console.log(err)
          }else{
            switch(myUrl.pathname){
                case '/':
                    res.end(`Welcome to Home page ${myUrl.query.name}`)
                    break;
                case '/about':
                    res.end(`Welcome to About page ${myUrl.query.name}`)
                    break;
                case '/contact':
                    res.end(`Welcome to Contact page ${myUrl.query.name}`)
                    break;
                case '/signup':
                    if((req.method) === 'GET'){
                        res.end('This is a signup from')
                    }else if((req.method) === 'POST'){
                        //Db
                        res.end("Success")
                    }else{
                        res.end('Bad request')
                    }
                    break;
                default:
                    res.end('404 Not found!!')
            }
        }
        })
    
});

myserver.listen(8000,()=>
console.log("Server is running!!"))

*/}

{/** Express Intro 

const express = require('express')
const app = express() // App is nothing but a handler function which will handele all request

app.get('/',(req,res)=>{
    return res.send("Hello "+ req.query.name+ " Welcome to Home page")
})

app.get('/about',(req,res)=>{
    return res.send("Hello "+ req.query.name+ " Welcome to about page")
})


app.listen(8001,( )=>{
    console.log(`http://localhost:8001`)
})

*/}