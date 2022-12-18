import {Express,Response,Request }from 'express';
import { extractJWT } from '../../middleware/extractJWT';

const userController = require('./userController');
function routes (app:Express ){
    app.get('/hello',(req:Request,res:Response)=>{
        res.status(200).json('hello there')
    })
    app.post('/api/users',userController.addUser,userController.login);
    app.get('/',extractJWT.verifyToken,userController.validateToken);
    app.get('/api/users',extractJWT.verifyToken,userController.getAllUser);
    app.get('/api/users/:id',extractJWT.verifyToken,userController.getAUser);
    app.post('/api/login',userController.login);
    app.put('/api/users/:id',extractJWT.verifyToken,userController.UpdateUser);
    app.delete('/api/users/:id',extractJWT.verifyToken,userController.deleteUser)

}
module.exports = routes
