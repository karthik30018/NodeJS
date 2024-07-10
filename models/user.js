const mongoose  = require('mongoose')

// creating a mongoose schema
const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    gender:{
        type:String,
    },
    job_title:{
        type:String,
        required:true,
    }
},{timestamps:true}) // Generate creation and updated time stamp

//Creating a model

const User = mongoose.model("user",userSchema);

module.exports = User