const mongoose=require('mongoose')

const Inputbox=mongoose.Schema({
    username:String,
    password:String
})

module.exports=mongoose.model('inputboxs',Inputbox)