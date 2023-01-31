import {Express,Response,Request }from 'express';
const subController = require('./subController');
function routes (app:Express ){
    app.get('/api/sub',subController.getAll)
}
module.exports = routes