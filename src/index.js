const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const productRouter = require('./routes/routes')
const Navbar = require('./model/Navbar')
const Inputbox = require('./model/Inputbox')
const Slider = require('./model/Slider')
require('dotenv').config();
const app = express()

const PORT = process.env.PORT || 4500 // getting port value from env file 

// to submit the data //
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// load static pages and images in hbs files //
app.use("/static", express.static("public"))

// to implement routes
app.use('', productRouter.routes)

// to start index form 1 instead of 0 in table.hbs file //
hbs.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});

// search engine declearation //
app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials('views/partials')


// connection to database
const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/password_management_tool').then(() => console.log("database connected!"))
}
main().catch((err) => console.log(err))

// saving navbar dynamic data to database//
// const result=new Navbar({
//     name:"PASSWORD MANAGEMENT TOOL",
//     img:"/static/images/github_transparent.png",
//     link:[
//         {
//            label:"HOME",
//            url:"/"
//         },
//         {
//             label:"PASSWORD",
//             url:"/password"
//         },
//         { 
//             label:"ABOUT US",
//             url:"/about"
//         },
//            {
//              label:"LOGOUT",
//              url:"/logout"
//            }
//     ]
// })
// result.save().then(()=>console.log("Data saved in database!"))


// Slider data to db - images,title & subtitle, color
// const result = new Slider({
//     data:[
//         {
//             img: "/static/images/lock1.png",
//             title: "First slide label",
//             subtitle: "Some representative placeholder content for the first slide",
//             class: "active"
//         },
//         {
//             img: "/static/images/lock2.png",
//             title: "Second slide label",
//             subtitle: "Some representative placeholder content for the second slide",
//         },
//        {
//             img: "/static/images/lock3.png",
//             title: "Third slide label",
//             subtitle: "Some representative placeholder content for the third slide",
//         }
//     ]
// })

// result.save().then(() => console.log("slider data in db"))

// server connection
app.listen(PORT, () => {
    console.log("server started at " + PORT)
})