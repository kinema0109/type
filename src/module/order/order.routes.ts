import {Express,Response,Request }from 'express';
const orderController = require('./orderController');
import { extractJWT } from '../../middleware/extractJWT';
const FCM = require('fcm-node');
function routes (app:Express ){
    app.post('/hello',(req:Request,res:Response,next)=>{
    const fcm =new FCM('AAAAWhzJ8HY:APA91bHtwTOlvYLwQqQVTopgs9KB0ILlkMxZTz0xmRa9QJ5BhgAYktFvrusHJ0dT6-iDD1Q2VrolAVCUv2JZAx9zQ06WNMUcm5a0F1hFelTBf5sLavzPj-cBqGsObkA6nioraIb1HJqN')
    if (fcm){
    const message = { 
        to:"/topics/"+req.body.topic,
        notification:{
            title:req.body.title,
            body:req.body.body,
            sound:'default',
            "click_action":"FCM_PLUGIN_ACTIVITY",
            "icon":"fcm_push_icon"
        }
        ,data:req.body.data
    }
    console.log(message);
    
    fcm.send(message,(err,response)=>{
        if(err){
            console.log(err);
           next(err)
        }
        else {
             res.json(response)
        }
    })
    }else {return res.status(400).json('fail')}
})
    app.get('/api/order/token',orderController.getToken);
    app.post('/api/addorder',extractJWT.verifyToken,orderController.addOrder);
    app.get('/api/order',orderController.getAllOrder);
    app.get('/api/getorder/:id',orderController.filterOrder);
    app.post('/api/border',orderController.getA);
}
module.exports = routes