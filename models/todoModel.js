const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    image:{
        type:String,
    },
    fullname:{
        type:String,
        required:true
    },
    emailaddress:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Todo',todoSchema)