"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../model/user');
const userController = {
    addUser: async (req, res) => {
        const newuser = new User(req.body);
        console.log(newuser);
        if (!newuser.name || !newuser.password || !newuser.email) {
            return res.status(400).json('all fields are required');
        }
        const duplicate = await User.findOne({ "name": newuser.name }).lean().exec();
        if (duplicate) {
            return res.status(409).json('duplicated user');
        }
        const saveuser = newuser.save();
        res.status(200).json(saveuser);
    },
    getAllUser: async (req, res) => {
        const users = await User.find();
        if (!users) {
            return res.status(400).json('No user found');
        }
        res.status(200).json(users);
    }
};
module.exports = userController;
