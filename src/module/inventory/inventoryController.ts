const Inventory = require('./inventory.model')
import {Response,Request}from 'express';
const orderInventory = require('./orderInventory.model')
const inventoryController ={
    postI:async(req, res, next) =>{
        const inventory = new Inventory(req.body);
        inventory.save()
        res.status(200).send(inventory)
    },
    postoI:async(req, res, next) =>{
        const orderinventory = new orderInventory(req.body);
        orderinventory.save()
        res.status(200).send(orderinventory)

    },
    getAll:async(req:Request, res:Response)=>{
        
         const inventory = await Inventory.aggregate([{
            // $lookup:{
            //     from:"orderinventories",
            //     localField:"item",
            //     foreignField:"item",
            //     as: "hello"},

                $merge: { into: "inventories"
                ,on:"_id", whenMatched: "merge", whenNotMatched: "insert" }
            
         }])
       
        
    //  const inventory = await Inventory.aggregate([{$lookup:{
    //     from:"orderinventories",
    //     localField:"sku",
    //     foreignField:"item",
    //     as:"order Inventory"
    //  }}])
        res.status(200).json(inventory)
    }
}
module.exports = inventoryController