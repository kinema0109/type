import mongoose from "mongoose";
import {Iinventory } from './inventory.interface'
const InventorySchema =new mongoose.Schema({
    _id:Number,
    item:String,
    description:String,
    instock:Number
})

const inventory = [ { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
{ "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
{ "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
{ "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
{ "_id" : 5, "sku": null, "description": "Incomplete" },
{ "_id" : 6 }];
const Inventory =  mongoose.model("Inventory",InventorySchema)
// Inventory.collection.insertMany(inventory,function (err, docs) {
//     if (err){ 
//         return console.error(err);
//     }
// })
module.exports = Inventory