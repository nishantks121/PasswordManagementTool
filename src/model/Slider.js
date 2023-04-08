const mongoose=require('mongoose')

const Slider=mongoose.Schema({
    img:String,
    title:String,
    subtitle:String,
    class:String
})

module.exports=mongoose.model('sliders',Slider)