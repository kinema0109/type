const mongoose = require('mongoose');
const express = require("express");
const dotenv = require('dotenv');
const {config} = require('./config/config');
const routes = require('./routing/routes');
const cors = require('cors')
const morgan = require('morgan');
const app = express();
dotenv.config();
app.use(express.json())
app.use(morgan("common"));
mongoose.set('strictQuery', true)
mongoose.connect(config.mongo.url,{retryWrites:true, W:'majority'}).
then(()=>{
    console.log('connect to mongodb ');
})
app.get("/",(req,res)=>{
    return res.send("hello world!");
})
const port =8000;
app.use(cors())
app.listen(port,()=>{
    console.log("listening on http://localhost " + port);
})
routes(app);
