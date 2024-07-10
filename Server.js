const express = require('express')
const app = express()
// const users = require('./MOCK_DATA.json')

const {connectMongoDb} = require('./connection')

const userRouter = require('./routes/user')
const {logReqRes} = require('./middlewares/index')
const PORT = 8000;
// MongoDb connection

connectMongoDb('mongodb://127.0.0.1:27017/Demo').then(()=>{
    console.log(" MongoDb connected!!")
})

// mongoose.connect('mongodb://127.0.0.1:27017/Demo')
// .then(()=>{console.log("MongoDb connected!!")}).catch((err)=>{console.log(err)});

// // creating a mongoose schema

// const userSchema = new mongoose.Schema({
//     first_name:{
//         type: String,
//         required: true
//     },
//     last_name:{
//         type: String,
//     },
//     email:{
//         type:String,
//         required: true,
//         unique:true,
//     },
//     gender:{
//         type:String,
//     },
//     job_title:{
//         type:String,
//         required:true,
//     }
// },{timestamps:true}) // Generate creation and updated time stamp
// //Creating a model
// const User = mongoose.model("user",userSchema);



//Middleware - Plugin  (To handel incoming data from browser)
app.use(express.urlencoded({extended:false}))// It will take the request and convert it into JS object
app.use(logReqRes('log.txt'))
// app.use((req,res,next)=>{
//     fs.appendFile('./log.txt',` \n ${Date.now()} : ${req.method} : ${req.path} : ${req.ip}`,(err)=>{
//         next()
//     })
    
// })


// // Routes

// app.get('/',(req,res)=>{
//     res.send("Home Page!")
// })

// app.get('/api/users',async(req,res)=>{
//     const allDbUser = await User.find({});
//     return res.status(200).json(allDbUser)
//     // res.setHeader('myName','Karthik') //Setting up the headers
//     // console.log(req.headers)
//     // return res.json(users)
// })

// app.get('/users',async (req,res)=>{
//     const allDbUser = await User.find({});
//     const html = `
//     <ul>${allDbUser.map((user)=>`<li>${user.id}</li><li>${user.first_name}</li><li>${user.last_name}</li><li>${user.email}</li>
//          <li>${user.gender}</li><li>${user.job_title}</li>  `)}</ul>`
//     res.send(html) //For html we have to use send
//     // const html = `
//     // <ul>${users.map((user)=>`<li>${user.id}</li><li>${user.first_name}</li><li>${user.last_name}</li><li>${user.email}</li>
//     //      <li>${user.gender}</li><li>${user.job_title}</li>  `)}</ul>`
//     // res.send(html) //For html we have to use send
// })

// //Dynamic Path Parameters
// app.get('/api/users/:id',async (req,res)=>{
//     const DbUser = await User.findById(req.params.id);
//      return res.status(200).json(DbUser)

//     // const id = Number(req.params.id)
//     // const user = users.find((user)=>user.id === id)
//     // if(!user){
//     //     return res.status(404).json({"message":"Not found!"})
//     // }
//     // return res.json(user)
// })


// app.post('/api/users',async (req,res)=>{
//     const body = req.body;
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
//         return res.status(400).json({"message":"All field are required"})
//     }
//     // users.push({id: users.length +1,...body})
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//     //     return res.status(201).json({status:'Success!',id: users.length})
//     // })

//     // Create user
//    await User.create({
//     first_name:body.first_name,
//     last_name:body.last_name,
//     email:body.email,
//     gender:body.gender,
//     job_title:body.job_title
//    })

//    return res.status(201).json({"message":"Success!!"}) 
// })

// app.patch('/api/users:id',async (req,res)=>{
//     // const body = req.body;
    
//     await User.findByIdAndUpdate(req.params.id,{last_name:"hxrhfc"})

//         return res.json({"message":"Success!!"}) 
    
//     // const id = Number(req.params.id);
//     // const body = req.body;
//     // const userIdx = users.findIndex((user)=> user.id === id);
//     // // const updusers = users.replace(userIdx,...body)
  
//     // //Get the deleted user object using splice. Mind we need to get the object and not array as returned by splice method, so '[0]' satisfies this requirement. The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
//     // const UpdateUser = users.splice(userIdx,1,body)[0];
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(UpdateUser),(err,data)=>{
//     //     return res.json({status:'Successfully updated!'})
//     // })
    
//     //TODO - Edit the user with Id
    
// })

// // app.delete('/api/users:id',(req,res)=>{
// //     const id = Number(req.params.id)
// //     const index = users.findIndex((index)=>index.id === id)
// //     if(index!==-1){
// //         users.splice(index,1);
// //     }

// //     //TODO - Delete an user based on ID
// //     return res.json({'status':'Success Removed!'})
// // })


// app.delete("/api/users/:id",async (req, res) => {
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({"message":"Successful"})
//     // //Get the id of the user
//     // const id = Number(req.params.id);
  
//     // //Find out the index of the user with above id from the array "users"
//     // const userIdx = users.findIndex((user)=> user.id === id);
  
//     // //Get the deleted user object using splice. Mind we need to get the object and not array as returned by splice method, so '[0]' satisfies this requirement. The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
//     // const delUser = users.splice(userIdx,1)[0];
  
//     // //Write the changes into the json file.
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //   return res.json({ status: "success", delUser });
//     // });
//   })



// {/** All the same route can be merged  

// app.route('/api/users:id').get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id)
//     const user = users.find((user)=>user.id === id)
//     return res.json(user)
// }).patch((res,req)=>{
//     const id = Number(req.params.id);
//     //TODO - Edit the user with Id
//     return res.json({'status':'pending!'})
// }).delete((req,res)=>{
//     //TODO - Delete an user based on ID
//     return res.json({'status':'pending!'})
// }).put((req,res)=>{
//     //TODO - Edit user with ID 
//     return res.json({'status':'pending!'})
//     })

// */}


app.use('/api/users',userRouter)// If any request made to the /api/user then use userRouter

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})