const express = require("express");
const router = express.Router();
const contactUsController=require('../controllers/contactUs');
router.get('/',contactUsController);

module.exports = router;