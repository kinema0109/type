import mongoose from "mongoose";
export interface IOrder{
    contact:{
        adrress:String,
        email:String,      
        note:String,      
        phone:Number,
    }      
    ,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
      
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
    price:Number,
}