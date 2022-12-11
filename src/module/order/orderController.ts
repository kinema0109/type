import {Response,Request}from 'express';
import { extractJWT } from '../../middleware/extractJWT';
const Order = require('./order.model');
const orderController ={
    getToken:async(req:Request, res:Response)=>{
        const password = extractJWT;
        console.log(password);
        res.status(200).send('hello')
    }
    ,
    addOrder:async(req:Request, res:Response)=>{
        
        const order = new Order(req.body);
        const neworder = order.save();
        if(neworder){
            return res.status(200).send(neworder)
        }
    }
}
module.exports = orderController;