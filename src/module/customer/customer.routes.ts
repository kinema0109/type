import {Express,Response,Request }from 'express';
const customerController = require('./customerController');
function routes (app:Express ){
    // app.get('/api/customer',customerController.getToken);
    app.post('/api/customer',customerController.addCustomer);
    app.get('/api/customer',customerController.getAll)
}
module.exports = routes