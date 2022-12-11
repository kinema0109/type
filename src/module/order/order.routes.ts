import {Express,Response,Request }from 'express';
const orderController = require('./orderController');
function routes (app:Express ){
    app.get('/hello',(req:Request,res:Response)=>{
        res.status(200).json('hello there')
    })
   
    app.get('/api/order',orderController.getToken);


}
module.exports = routes