"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController = require('../Controller/userController');
function routes(app) {
    app.get('/hello', (req, res) => {
        res.status(200).json('hello there');
    });
    app.post('/api/users', userController.addUser);
    app.get('/api/users', userController.getAllUser);
}
module.exports = routes;
