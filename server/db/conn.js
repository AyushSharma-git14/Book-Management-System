const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bms')
.then(()=>{
    console.log("MongoDB is connected")
})
.catch(()=>{
    console.log('MongoDB is not connected')
})