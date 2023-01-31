import mongoose from "mongoose";
export interface IUser{
    username:String;
    password:String;
    name:String;
    orderID:mongoose.Schema.Types.ObjectId,
    refreshToken:String,
    DeviceID:[String]
    }
