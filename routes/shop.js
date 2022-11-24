const express=require('express');
const router=express.Router();
const shopControllers=require('../controllers/products');
//shop/=> USE(to handle all requests)
router.use('/',shopControllers.getShopPage);
module.exports=router;