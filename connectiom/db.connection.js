

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/trainning",{useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(!error) console.log('DB connected')
})