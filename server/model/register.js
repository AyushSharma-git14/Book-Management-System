const mongoose = require('mongoose')

const RegisterSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    conpass:String,
    number:Number,

})

const Register=mongoose.model('register',RegisterSchema)

module.exports=Register