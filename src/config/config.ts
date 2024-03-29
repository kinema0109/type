import * as dotenv from 'dotenv';

dotenv.config()
const SERVER_TOKEN_EXPIRETIME = 3000;
const SERVER_TOKEN = process.env.SERVER_TOKEN;
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
const SERVER_FIREBASE = process.env.FIREBASE_KEY;
export const config={
    mongo:{
        url:process.env.MONGODB_URL
    },
    server:{
        port:SERVER_PORT
    },
    token:{
        expiretime:SERVER_TOKEN_EXPIRETIME,
        token:SERVER_TOKEN as String,
        tokenSecret:SERVER_TOKEN_SECRET as String
    }
    ,default:{
        saltWorkFactor:10
    },
    firebase:{
        keymessanging:SERVER_FIREBASE
    }
}
