const express = require("express");
const routers = express.Router();
const adminControllers=require('../controllers/products')
//GET request to /admin/add-product
routers.get("/add-product", adminControllers.getAddProduct);
   
//POST request to /admin/add-product
routers.post("/add-product",adminControllers.postAddProduct);
module.exports = routers;



