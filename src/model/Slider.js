const mongoose=require('mongoose')

const Slider=new mongoose.Schema({
    data:[
        {
            img:{type:String,required:true},
            title:{type:String,required:true},
            subtitle:{type:String,required:true},
            class:{type:String}
        }
    ]
})

module.exports=mongoose.model('sliders',Slider)