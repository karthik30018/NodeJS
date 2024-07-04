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