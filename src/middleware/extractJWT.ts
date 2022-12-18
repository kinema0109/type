import {NextFunction,Response,Request }from 'express';
import { config } from '../config/config';
import * as jwt from 'jsonwebtoken';

export const extractJWT  = {

verifyToken: async(req:Request,res:Response,next:NextFunction) => {

    let token = req.headers.authorization?.split(' ')[1];
    if(token){
    
        jwt.verify(token,config.token.tokenSecret as string,(error,decoded)=>{
             if(error){
                return res.status(404).json({
                    message:error.message,
                    error  
                })
             }else{
                res.locals.jwt = decoded;
                next();
             }
        })
    }
    else{
       
        return res.status(401).json('Unauthorized')
    }

}
, 
    verifyRefreshToken: async(req:Request,res:Response,next:NextFunction)=>{
        let token = req.headers.authorization?.split(' ')[1];
        if(token){}
    },
}