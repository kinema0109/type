const UserRoutes = require('../module/user/user.routes');
const OrderRoutes = require('../module/order/order.routes');
const CustomerRoutes = require('../module/customer/customer.routes');
const subRoutes = require('../module/subcription/subcription.routes');
const inventoryRoutes = require('../module/inventory/inventory.routes');
import {Express,Response,Request }from 'express';
function routes (app:Express ){
  UserRoutes(app)
  OrderRoutes(app)
  CustomerRoutes(app)
  subRoutes(app)
  inventoryRoutes(app)
}
module.exports = routes;