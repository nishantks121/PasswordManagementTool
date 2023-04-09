const mongoose=require('mongoose')

const Inputbox=new mongoose.Schema({
    username:{type: String, required:true},
    password:{type: String, required:true},
    deleteImg:{type: String, required:true, default:"/static/images/delete2.png"}
})

module.exports=mongoose.model('inputboxs',Inputbox)