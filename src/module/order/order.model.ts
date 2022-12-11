import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new mongoose.Schema<IOrder>({
    contact:{
        adrress:String,
        email:String,      
        note:String,      
        phone:Number,
    }      
    ,
    userID:{
        type:ObjectId,
    }
    ,
    order:{
        Cheese:Number,
        Salad:Number,
        Bacon:Number,
        Meat:Number
    }
    ,
    timestamp:Date
    ,
    Price:{
        type:Number,
        required:true
    }
}
)
const Order = mongoose.model('Orders',orderSchema);
module.exports =Order;