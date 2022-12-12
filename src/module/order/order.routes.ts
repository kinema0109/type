import {Express,Response,Request }from 'express';
const orderController = require('./orderController');
function routes (app:Express ){
    app.get('/hello',(req:Request,res:Response)=>{
        res.status(200).json('hello there')
    })
   
    app.get('/api/order/token',orderController.getToken);
    app.post('/api/order',orderController.addOrder);
    app.get('/api/order',orderController.getAllOrder);
    app.get('/api/order/:id',orderController.filterOrder);
}
module.exports = routes