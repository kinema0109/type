import {Express,Response,Request }from 'express';
import mongoose from "mongoose";

const borderSchema = new mongoose.Schema({
    _id:String,
    context:{
        product:[
            {a:{id:String,                
            version:String}}
        ]
    }
})

 const Border = mongoose.model('Border',borderSchema)
module.exports = Border
 