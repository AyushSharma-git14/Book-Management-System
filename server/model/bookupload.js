const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    name:String,
    books:String,
    filebook:String
})

const bookUpload=mongoose.model('bookUpload',bookSchema)
module.exports=bookUpload