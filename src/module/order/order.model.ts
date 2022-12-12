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
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
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
    price:{
        type:Number,
        required:true
    }
}
)
const Order = mongoose.model('Orders',orderSchema);
module.exports =Order;