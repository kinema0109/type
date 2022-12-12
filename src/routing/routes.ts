const UserRoutes = require('../module/user/user.routes');
const OrderRoutes = require('../module/order/order.routes');
import {Express,Response,Request }from 'express';
function routes (app:Express ){
  UserRoutes(app);
  OrderRoutes(app);
}
module.exports = routes;