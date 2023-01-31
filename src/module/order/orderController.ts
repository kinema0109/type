import * as jwt from 'jsonwebtoken';
import {Response,Request}from 'express';
import { extractJWT } from '../../middleware/extractJWT';
const Order = require('./order.model');
const User = require('../user/user.model');
const Border= require('./border.model');
const Product = require('./product.model');

import { config } from '../../config/config';

const FCM = require('fcm-node');
interface JwtPayload {
    username: string
  }
interface token{
    username?: string,
    token?:string
}

const orderController ={
    getToken:async(req:Request, res:Response)=>{
        console.log(extractJWT);
        res.status(200).send('hello')
    }
    ,
    addOrder:async(req:Request, res:Response,next)=>{
        // const token = req.headers.authorization?.split(' ')[1]|| req.header('token')
        const token= req.header('authorization');
        if(token){    
        const validate = jwt.verify(token, config.token.tokenSecret as jwt.Secret) as JwtPayload
        const user = await User.findOne({"username":validate.username});
        console.log(user._id);
        const neworder = new Order(req.body);
        const saveorder = await neworder.save()
        if(neworder){
            const order = await User.findById(user._id)
            await saveorder.updateOne({$push:{userID:order._id}})
            return res.status(200).json("success")
        }
    }
    return res.status(400).json('login first')
    }
    ,
    filterOrder:async(req: Request, res: Response)=>{
        // const token= req.header('authorization');
        // if(token){    
        // const validate = jwt.verify(token, config.token.tokenSecret as jwt.Secret) as JwtPayload
        // const filter = await User.findOne({"username":validate.username});
        let pageSize= req.query.pageSize ;
        let page =Number(req.query.pageNumber) || 1
       const filter = await Order.find({userID:req.params.id}).limit(pageSize).skip(pageSize as any * (page-1))
        //  const filter = await Order.aggregate([
            
        //     {$project:{id:"$UserID",
        //     contact:"$contact",
        //     order:"$order",
        //     price:"$price"
        //   }}
        // // 
        // ])        
        return res.status(200).send(filter)        
    }
    
    ,
    getAllOrder:async(req:Request, res:Response)=>{
        const order = await Order.find()
        if(!order){
            return res.status(400).json('No user found')
        }
        res.status(200).json(order)
    },
    getA:async(req:Request, res:Response)=>{
       const border = new Border(req.body)
       border.save()
     res.status(200).json(border)
    },
       getB:async(req:Request, res:Response)=>{
        const border = await Border.aggregate([
 
        ])}
    
}
module.exports = orderController;