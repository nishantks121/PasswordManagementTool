const mongoose=require('mongoose')

const Inputbox=new mongoose.Schema({
    username:String,
    password:String
})

module.exports=mongoose.model('inputboxs',Inputbox)