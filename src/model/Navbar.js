const mongoose =require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    img:String,
    link:[
        {
            label:String,
            url:String
        }
    ]
})

module.exports=mongoose.model('navbars',productSchema)