const path=require('path');
const express = require("express");
const rootDir=require('../util/path');
const router = express.Router();
router.use('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','404.html'))
})
module.exports = router;