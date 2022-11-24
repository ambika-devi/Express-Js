const express = require("express");
const router = express.Router();
const errorPageController=require('../controllers/errorPage');
router.use(errorPageController.errorPage);
module.exports = router;