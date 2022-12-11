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
   
    }
   
)

const User = mongoose.model('User',userSchema);
module.exports = User;