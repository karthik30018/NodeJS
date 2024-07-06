const express = require('express')
const app = express()
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const PORT = 8000;

//Middleware - Plugin  (To handel incoming data from browser)
app.use(express.urlencoded({extended:false}))// It will take the request and convert it into JS object



// Routes

app.get('/',(req,res)=>{
    res.send("Home Page!")
})

app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/users',(req,res)=>{
    const html = `
    <ul>${users.map((user)=>`<li>${user.id}</li><li>${user.first_name}</li><li>${user.last_name}</li><li>${user.email}</li>
         <li>${user.gender}</li><li>${user.job_title}</li>  `)}</ul>`
    res.send(html) //For html we have to use send
})

//Dynamic Path Parameters
app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id === id)
    return res.json(user)
})


app.post('/api/users',(req,res)=>{
    const body = req.body;
    users.push({id: users.length +1,...body})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:'Success!',id: users.length})
    })
   
})

app.patch('/api/users:id',(res,req)=>{
    const id = Number(req.params.id);
    //TODO - Edit the user with Id
    return res.json({'status':'pending!'})
})

app.delete('/api/users:id',(req,res)=>{
    //TODO - Delete an user based on ID
    return res.json({'status':'pending!'})
})

{/** All the same route can be merged  

app.route('/api/users:id').get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id === id)
    return res.json(user)
}).patch((res,req)=>{
    const id = Number(req.params.id);
    //TODO - Edit the user with Id
    return res.json({'status':'pending!'})
}).delete((req,res)=>{
    //TODO - Delete an user based on ID
    return res.json({'status':'pending!'})
}).put((req,res)=>{
    //TODO - Edit user with ID 
    return res.json({'status':'pending!'})
    })

*/}


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})