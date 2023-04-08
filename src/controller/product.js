const Navbar =require('../model/Navbar')
const Inputbox =require('../model/Inputbox')
const Slider =require('../model/Slider')

exports.home=async(req,res)=>{
    const data= await Navbar.findOne({"_id":"64272ff9d7883d7665758e70"})
    // console.log(data)
    res.render("home.hbs",{
        data:data
    })
}

exports.password=async(req,res)=>{
    const data= await Navbar.findOne({"_id":"64272ff9d7883d7665758e70"})
    const slide= await Slider.find({})
    const tableData= await Inputbox.find({})
    // console.log(slide)
    res.render("password.hbs",{
        data:data,
        slide:slide,
        tableData:tableData
    })
}

exports.about=async(req,res)=>{
    const data=await Navbar.findOne({"_id":"64272ff9d7883d7665758e70"})
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
    console.log("data submited!")
    console.log(req.body)

    // save data to db //
  try{
      const result=new Inputbox(req.body)
      result.save()
      console.log(result)
      res.redirect('/password')
  }catch(e){
    console.log(e)
    res.redirect('/')
  }
}