const express = require('express')
const app = express()
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const PORT = 8000;

//Middleware - Plugin  (To handel incoming data from browser)
app.use(express.urlencoded({extended:false}))// It will take the request and convert it into JS object

app.use((req,res,next)=>{
    fs.appendFile('./log.txt',` \n ${Date.now()} : ${req.method} : ${req.path} : ${req.ip}`,(err)=>{
        next()
    })
    
})

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
    const body = req.body;
    const userIdx = users.findIndex((user)=> user.id === id);
    // const updusers = users.replace(userIdx,...body)
  
    //Get the deleted user object using splice. Mind we need to get the object and not array as returned by splice method, so '[0]' satisfies this requirement. The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
    const UpdateUser = users.splice(userIdx,1,body)[0];
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(UpdateUser),(err,data)=>{
        return res.json({status:'Successfully updated!'})
    })
    
    //TODO - Edit the user with Id
    
})

// app.delete('/api/users:id',(req,res)=>{
//     const id = Number(req.params.id)
//     const index = users.findIndex((index)=>index.id === id)
//     if(index!==-1){
//         users.splice(index,1);
//     }

//     //TODO - Delete an user based on ID
//     return res.json({'status':'Success Removed!'})
// })


app.delete("/api/users/:id", (req, res) => {
    //Get the id of the user
    const id = Number(req.params.id);
  
    //Find out the index of the user with above id from the array "users"
    const userIdx = users.findIndex((user)=> user.id === id);
  
    //Get the deleted user object using splice. Mind we need to get the object and not array as returned by splice method, so '[0]' satisfies this requirement. The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
    const delUser = users.splice(userIdx,1)[0];
  
    //Write the changes into the json file.
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", delUser });
    });
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