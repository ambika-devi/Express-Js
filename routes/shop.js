const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();
//shop/=> USE(to handle all requests)
router.use('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
})
module.exports=router;