const path=require('path');
const express = require("express");
const rootDir=require('../util/path')
const routers = express.Router();

//GET request to /admin/add-product
routers.get("/add-product", (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
   
//POST request to /admin/add-product
routers.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
} );
module.exports = routers;



