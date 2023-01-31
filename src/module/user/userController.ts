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
    const duplicate = await User.findOne({"username":username}).lean().exec()
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
        password:hash
        }
        );
        saveuser.save()
        return res.status(201).json(saveuser)  
    })
}
,
    login: async(req: Request, res: Response)=>{
        const finduser = await User.findOne({"username":req.body.username}).exec()
        console.log(finduser)
        const validPassword = await bcrypt.compare(req.body.password,finduser.password)
        console.log(validPassword);
        
        if(!finduser){
            return res.status(500).json("No user found")
        }
        else if(!validPassword){
           return res.status(500).json("check lai mat khau")
        }
       else {
            const token=jwt.sign({
            id:finduser._id,
            username:req.body.username
        }
        ,
        config.token.tokenSecret as string,
        {expiresIn:"1d"})
        console.log(token);
        const refreshToken =jwt.sign({
            id:finduser._id,
            username:req.body.username },
            config.token.tokenSecret as string,
            {expiresIn:"365d"}
        )
        if (finduser.refreshToken ===undefined){
        finduser.refreshToken = refreshToken
        finduser.save()}
        const {password,...other} =req.body
        const id = finduser._id
         return res.status(200).json({
            ...other,token,refreshToken,id
         })}       
        }
,
    getAllUser:async(req: Request, res: Response)=>{
        const users = await User.find()
        if(!users){
            return res.status(400).json('No user found')
        }
        res.status(200).json(users)
    }
,
    getAUser:async(req: Request, res: Response)=>{
        const user = await User.findById(req.params.id)    
        if(!user){
            return res.status(400).json('No user found')
        }
        res.status(200).json(user)
    }
,
    UpdateUser:async(req: Request, res: Response)=>{
        const updateuser = await User.findById(req.params.id)
        await updateuser.updateOne({$set: req.body})
        // const duplicate = await User.findOne({"username":updateuser.username}).lean().exec()
        // if (duplicate&&duplicate?._id.toString()!==updateuser.id){
        //     return res.status(409).json('duplicated user')
        // }
        res.status(200).json(updateuser.username+ " updated successfully")
    }
    ,
    deleteUser:async(req: Request, res: Response)=>{
        const deleteuser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successfully")

    }
}
module.exports = userController;