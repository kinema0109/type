import { log } from 'console';
import * as jwt from 'jsonwebtoken';
import {Response,Request}from 'express';
import { extractJWT } from '../../middleware/extractJWT';
const Order = require('./order.model');
const User = require('../user/user.model');
import { config } from '../../config/config';
const orderController ={
    getToken:async(req:Request, res:Response)=>{
        console.log(extractJWT);
        
        res.status(200).send('hello')
    }
    ,
    addOrder:async(req:Request, res:Response)=>{
        const token = req.headers.authorization?.split(' ')[1];
        if(token){
        const validate = jwt.verify(token,config.token.tokenSecret)
        const user = await User.findOne({"name":validate.username});
        console.log(user._id);
        const neworder = new Order(req.body);
        const saveorder = await neworder.save()
        if(neworder){
            const order = await User.findById(user._id)
            console.log(order);
            await saveorder.updateOne({$push:{userID:order._id}})
            return res.status(200).send(saveorder)
        }
    }
    return res.status(400).json('login first')
    }
    ,
    filterOrder:async(req: Request, res: Response)=>{
        const filter = await Order.find({userID:req.params.id})
        if(filter==null){
            let filter = await Order.find();
            res.status(200).send(filter);
        }else{
            res.status(200).send(filter)
        }
    }
    ,
    getAllOrder:async(req:Request, res:Response)=>{
        const order = await Order.find()
        if(!order){
            return res.status(400).json('No user found')
        }
        res.status(200).json(order)
    }
}
module.exports = orderController;