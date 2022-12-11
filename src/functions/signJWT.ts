import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { IUser } from '../module/user/user.interface';
const User = require('../model/user');

export const signJWT = (user1:typeof User,user:IUser,callback: (error:Error|null,token:string |null)=> void):void =>{
    var timeSinceEpoch = new Date().getTime();
    var expirationTIme= timeSinceEpoch + Number(config.token.expiretime)*100000;
    var expirationTimeInSeconds = Math.floor(expirationTIme/1000);

    jwt.sign({
        username:user.username,
        id:user1._id
    },
        config.token.tokenSecret,
        {
            issuer:config.token.token,
            algorithm:'HS256',
            expiresIn:expirationTimeInSeconds,
            username:user
        },
        (error,token)=>{
            if(error){
                callback(error,null);
            }
            else{
                callback(null,token);
            }   
        }
    )
}