import {Response,Request}from 'express';
const Sub = require('../subcription/subcription.model');
const subController ={getAll:async(req:Request, res:Response)=>{
//cau1
    // const customers =await Sub.find()
        const customers1 =await Sub.find({grades:{$elemMatch:{"score":{$gt:30}}}})
// const customers =await Sub.aggregate([
    //cau2
    // {$group:{_id:{
    //         restaurant_id:"$restaurant_id",
    //         name:"$name",
    //         borough: "$borough",
    //         cuisine: "$cuisine",
    //     }
    // }
    // }
    //cau3
    // {$unset:"name"}
    //cau4
//     {$group:{_id:{
//         restaurant_id:"$restaurant_id",
//         name:"$name",
//         borough: "$borough",
//         zipcode:"$address.zipcode",
//     },
    
// },
// }
//cau5
// {$match:{borough:"Bronx"}}

// ])
res.status(200).send(customers1)
}
}

module.exports = subController;