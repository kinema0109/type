import { ObjectId } from "mongodb";
export interface IOrder{
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
    Price:Number,
}