import * as bcrypt from 'bcrypt';
import {Response,Request}from 'express';
import mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config/config';
const User = require('./user.model');
const userController={ 
    validateToken:async(req: Request, res: Response)=>{
    return res.status(200).json({
        message: 'Authorized'
    })
    }
    ,
   addUser:async(req: Request, res: Response)=>{
    const {name,password,username} = new User(req.body);
    
    if (!name || !password|| !username){
        return res.status(400).json('all fields are required')
    }
    const duplicate = await User.findOne({"name":name}).lean().exec()
    if (duplicate){
        return res.status(409).json('duplicated user')
    }
    bcrypt.hash(password,10,(hashError,hash)=>{
        if(hashError){
            return res.status(500).json(hashError)
        }
         const saveuser = new User ({
        _id:new mongoose.Types.ObjectId(),
        username,
        name,
        password:hash}
        );
        return saveuser.save()
        .then(user =>{
            return res.status(201).json(saveuser)
        })
    })
   
}
,
    login: async(req: Request, res: Response)=>{
     
        const finduser = await User.findOne({"name":req.body.name}).exec()
  
        const validPassword = await bcrypt.compare(req.body.password,finduser.password)
        
        console.log(validPassword);
        
        if(!finduser){
            return res.status(500).json("No user found")
        }
        else if(!validPassword){
           return res.status(500).json("check lai mat khau")
        }
        else{
            const token=jwt.sign({
            id:req.body._id,
            username:req.body.name
        },
        config.token.tokenSecret,
        {expiresIn:"1d"})
        const {password,...other} =req.body
         return res.status(200).json({
            ...other,token
         })}
        //  User.find({"name":user.name}).exec().then(user =>{
        //     bcrypt.compare(user.password,user[0].password,(error,result)=>{
        //         if(error){  
        //             console.log("loi 1");
        //             return res.status(401).json({
        //                 message:'Unauthorized', 
                        
        //             })
        //         }else if(result){  
            //         signJWT(user1,user[0],(error,token)=>{
            //             console.log(user[0]);
            //             console.log(user1);
            //             if(error){
            //                 console.log("loi 2");
            //             return res.status(401).json({
            //                 message:'Unauthorized',
            //                 error
            //             })
            //         }
            //         else if (token){
            //         return res.status(200).json({
            //             message:'auth successful',
            //             token,
            //             user:user[0]
            //         });
            //     }
            // })
            
        }
    // });
    //      });
    // }
,
    getAllUser:async(req: Request, res: Response)=>{
        const users = await User.find()
        if(!users){
            return res.status(400).json('No user found')
        }
        res.status(200).json(users)
    }
}
module.exports = userController;