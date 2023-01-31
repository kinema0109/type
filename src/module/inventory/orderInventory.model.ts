import mongoose from "mongoose";
const orderInventorySchema =new mongoose.Schema({
    _id:Number,
    item:String,
    price:Number,
    quantity:Number
})
const orderInventory = mongoose.model('OrderInventory', orderInventorySchema)
module.exports = orderInventory