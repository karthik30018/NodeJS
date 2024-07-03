// The fs module enables interacting with the file system.
const fs = require("fs")
{/** 
// To create a file

// If we use the existing file name to create new, the content will be override
fs.writeFileSync('./test.txt',"Creating a file")

// Async - For this we have to use call back function which will return error
fs.writeFile('./test.txt',"Creating a file",(err)=>{ return err})

*/}

{/** 

// To read a file

const result = fs.readFileSync('./test.txt','utf-8')
console.log(result)

fs.readFile('./test.txt','utf-8',(err,result)=>{if(err){console.log(err)}else{console.log(result)}})

*/}

{/** 
// To append data

fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

fs.appendFile('./test.txt',"Appened data",(err)=>{return err})

*/}

{/**
// To delete a file 

fs.unlinkSync('./test.txt')

 */}

 {/** 
//To create directory
fs.mkdirSync('./test/in/',{recursive:true})

*/}