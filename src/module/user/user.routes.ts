import {Express,Response,Request }from 'express';
import { extractJWT } from '../../middleware/extractJWT';

const userController = require('./userController');
function routes (app:Express ){
    app.get('/hello',(req:Request,res:Response)=>{
        res.status(200).json('hello there')
    })
    app.post('/api/users',userController.addUser);
    app.get('/api/validate',extractJWT,userController.validateToken);
    app.get('/api/users',userController.getAllUser);
    app.post('/api/login',userController.login);

}
module.exports = routes
