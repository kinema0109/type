const mongoose = require('mongoose');
const express = require("express");
const dotenv = require('dotenv');
const {config} = require('./config/config');
const UserRoutes = require('./module/user/user.routes');
const OrderRoutes = require('./module/order/order.routes');
const morgan = require('morgan');
const app = express();
dotenv.config();
app.use(express.json())
app.use(morgan("common"));
mongoose.set('strictQuery', true)
console.log(config.mongo.url);

mongoose.connect(config.mongo.url,{retryWrites:true, W:'majority'}).
then(()=>{
    console.log('connect to mongodb ');
})
app.get("/",(req,res)=>{
    return res.send("hello world!");
})
const port =8000;
app.listen(port,()=>{
    console.log("listening on http://localhost " + port);

})
UserRoutes(app);
OrderRoutes(app);