const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
require("dotenv/config");

//middleware
app.use(bodyParser.json());
const userRoute= require('./routes/user_routes');
app.use('/user',userRoute);

const bikeRoute = require("./routes/bike_routes");
app.use('/bike',bikeRoute);

const memberRoute = require("./routes/member_routes");
app.use('/member',memberRoute);

const shopRouter = require("./routes/shop_routes");
app.use('/shop',shopRouter);

//db connection
const dbUriString =process.env.dbUriString;
mongoose.connect(dbUriString,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("connected to db");
});
app.listen(3000);