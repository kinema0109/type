import {Express,Response,Request }from 'express';
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    context:{
        product:{
            name:String,
            image:String
        }
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product