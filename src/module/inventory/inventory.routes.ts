import {Express,Response,Request }from 'express';
const inventoryController = require('./inventoryController');

function routes (app:Express ){
    app.get('/api/inventory',inventoryController.getAll);
    app.post('/api/inventory',inventoryController.postI)
    app.post('/api/orderinventory',inventoryController.postoI)
}
module.exports = routes;