const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); //getting the body parser utility
const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");
const contactUs = require("./routes/contactUs");
const successPage = require("./routes/success");
const error = require("./routes/404");
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); //parsing the form data ; has a default next() to flow the data
app.use(express.static(path.join(__dirname, "public")));

app.use("/shop", shopRoute); //hadles all the requests starting with /shop
app.use("/admin", adminRoute); //hadless all the requests starting with /admin both GET and POST
app.use("/contactUs", contactUs);//hadles all the requests starting with /contactUs
app.use("/success", successPage);
app.use(error);
app.listen(3001);
