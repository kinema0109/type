"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
exports.config = {
    mongo: {
        url: process.env.MONGODB_URL
    },
    server: {
        port: SERVER_PORT
    },
    default: {
        saltWorkFactor: 10
    }
};
