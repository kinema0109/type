import {Express,Response,Request }from 'express';
import { extractJWT } from '../../middleware/extractJWT';

const userController = require('./userController');
function routes (app:Express ){
    app.get('/hello',(req:Request,res:Response)=>{
        res.status(200).json('hello there')
    })
    app.post('/api/addusers',userController.addUser);
    app.get('/',userController.validateToken);
    app.get('/api/users',userController.getAllUser);
    app.get('/api/users/:id',extractJWT.verifyToken,userController.getAUser);
    app.post('/api/login',userController.login);
    app.put('/api/users/:id',userController.UpdateUser);
    app.delete('/api/users/:id',userController.deleteUser)

}
module.exports = routes
