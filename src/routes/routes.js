const express=require('express')
const productController=require('../controller/product')
const routes=express.Router()

routes
.get('/',productController.home)
.get('/password',productController.password)
.get('/about',productController.about)
.get('/logout',productController.logout)
.post("/process-contact-form",productController.formSubmit)

exports.routes=routes