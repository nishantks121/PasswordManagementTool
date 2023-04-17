const Navbar =require('../model/Navbar')
const Inputbox =require('../model/Inputbox')
const Slider =require('../model/Slider')

const navbarId="643d9a69fed81493622b3031"   // mongodb atles
const SliderId="643d9a900242fa7cda3a70ae"   // mongodb atles

// const navbarId="643dab154f4c1d241b27f017"   // local database
// const SliderId="643dab1d790b1aa3cea67fed"   // local database

exports.home=async(req,res)=>{
    const data= await Navbar.findOne({"_id":navbarId})
    // console.log(data)
    res.render("home.hbs",{
        data:data
    })
}

exports.password=async(req,res)=>{
    const data= await Navbar.findOne({"_id":navbarId})
    const slide= await Slider.findOne({"_id":SliderId})
    const tableData= await Inputbox.find({})
    // console.log(slide)
    res.render("password.hbs",{
        data:data,
        slide:slide,
        tableData:tableData
    })
}

exports.about=async(req,res)=>{
    const data=await Navbar.findOne({"_id":navbarId})
    res.render("about.hbs",{
        data:data
    })
}

exports.logout=(req,res)=>{
    res.send(`
    <h1>working !</h1>
    <a href="/">Click to Redirect</a>
    `)
}

exports.formSubmit=(req,res)=>{
    console.log(req.body)
    console.log("data submited!")

    // save data to db //
  try{
      const result=new Inputbox(req.body)
      result.save()
    //   console.log(result)
      res.redirect('/password')
  }catch(err){
    console.log(err)
    res.redirect('/')
  }
}