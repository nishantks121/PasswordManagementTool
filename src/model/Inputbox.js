const mongoose=require('mongoose')

const Inputbox=new mongoose.Schema({
    username:{type: String, required:true},
    password:{type: String, required:true}
})

module.exports=mongoose.model('inputboxs',Inputbox)