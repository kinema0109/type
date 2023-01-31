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
        cheese:Number,
        salad:Number,
        bacon:Number,
        meat:Number
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