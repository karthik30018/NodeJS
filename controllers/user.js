const User = require('../models/user')


async function handleGetAllUsers(req,res){
    const allDbUser = await User.find({});
    return res.status(200).json(allDbUser)
}

async function handleGetUserById(req,res){
    const DbUser = await User.findById(req.params.id);
     return res.status(200).json(DbUser)
}

async function handleCreateUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return res.status(400).json({"message":"All field are required"})
    }
 

    // Create user
   const result = await User.create({
    first_name:body.first_name,
    last_name:body.last_name,
    email:body.email,
    gender:body.gender,
    job_title:body.job_title
   })

   return res.status(201).json({"message":"Success!!",id:result._id}) 
}


async function handleUpdateUserById(req,res){
   // const body = req.body;
    
   await User.findByIdAndUpdate(req.params.id,{last_name:"hxrhfc"})

   return res.json({"message":"Success!!"}) 
}

async function handleDeleteUserByID(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({"message":"Successful"})
}


module.exports = {
    handleGetAllUsers,handleGetUserById,handleCreateUser,handleUpdateUserById,handleDeleteUserByID
}