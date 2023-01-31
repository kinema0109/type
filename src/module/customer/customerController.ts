import {Response,Request}from 'express';
const Customer = require('./customer.model');
const User = require('../user/user.model');
const customerController ={
    addCustomer:async(req:Request, res:Response,next)=>{
        const customer = new Customer(req.body);
        customer.save()
        res.status(200).send(customer)
        }
        ,
    getAll:async(req:Request, res:Response)=>{

        const customers =await Customer.aggregate([
    //cau2
            {
              $group:{_id:{id:"$_id",
              city:"$city",
              state:"$state",
              address:"$address"
            }}
    }

    //cau3  
    // {   
    //     $group:{_id:"$state",count:{$sum:1}}
    // }
    //cau4
    
])
    res.status(200).send(customers)
    }
}
module.exports = customerController;
