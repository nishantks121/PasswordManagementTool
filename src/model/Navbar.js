const mongoose =require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
    link:[
        {
            label:{type:String,required:true},
            url:{type:String,required:true}
        }
    ]
})

module.exports=mongoose.model('navbars',productSchema)