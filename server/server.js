const express = require('express')
const app = express()
const port=5000
const cors=require('cors')
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


//Database connect
require('./db/conn')

//Model 
const Register=require('./model/register')
const bookUpload=require('./model/bookupload')



//Middleware 
app.use(cors())


// SIGN-UP API

app.post('/signup',async(req,res)=>{
    const{name,email,password,conpass,number}=req.body
    const preUser=await Register.findOne({email})
    if(!(preUser)){
        let registerdata=new Register({name,email,password,conpass,number})
        let result=await registerdata.save()
        res.send({message:'Registered Successfully',userdata:result})
    }
    else{
        res.send({message:'Email Already Registered'})
    }

})



//BOOK UPLOAD API

app.post('/createbook',upload.single('filebook'),async(req,res)=>{
    const{name,books,filebook}=req.body
    let bookupload=new bookUpload({name,books,filebook})
    let result=await bookupload.save()
    res.send({message:"Your book has been uploaded successfully!!!",result})
})


//FETCH API

app.get('/fetch',async(req,res)=>{
    let fetchdata=await bookUpload.find()
    res.send(fetchdata)
})

//DELETE API

app.delete('/delete/:id',async(req,res)=>{
    await bookUpload.deleteOne({_id:req.params.id})
    res.send({message:'Deleted'})
})


//UPDATE API

app.put('/update/:id',async(req,res)=>{
    const{name,books,filebook}=req.body
    let result=await bookUpload.updateOne({_id:req.params.id},
    {$set:{name,books,filebook}})
    res.send({message:'Updated Successfully',result})
})

// GETDETAILS
app.get('/getdetails/:id',async(req,res)=>{
    let result=await bookUpload.findById({_id:req.params.id})
    res.send(result)
})



app.listen(port,()=>{
    console.log(`App running on port : ${port}`)
    console.log(`http://localhost:${port}`)
})