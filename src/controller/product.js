const Navbar =require('../model/Navbar')
const Inputbox =require('../model/Inputbox')
const Slider =require('../model/Slider')

const navbarId="643315ff35efd53a212a7633"
const SliderId="6433177f2ffed307f02ce604"

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