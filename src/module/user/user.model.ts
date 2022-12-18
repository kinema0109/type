import mongoose, { Mongoose } from "mongoose";
import { IUser } from "./user.interface";
const userSchema = new mongoose.Schema<IUser>({
    username:{
        type:String,
        require:true
    
    },
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    ,
    orderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders'
    }
    ,refreshToken:String
    }
   
)

const User = mongoose.model('Users',userSchema);
module.exports = User;