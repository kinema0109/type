import mongoose from "mongoose";
import { ICustomer } from "./customer.interface";
const customerSchema = new mongoose.Schema({
    address: String,
    city: String,
    cust_type_id:String,
    fed_id:String,
    portal_code:String,
    state:String,
    officer:{
        fristname:String,
        lastname:String,
        state_date:String,
        title:String,
        cust_id:Number,
        },
    invadividual:{
        birth_date:String,
        first_name:String,  
        last_name:String,
    }
})
const Customer = mongoose.model('Customers',customerSchema);
const customers=[ 
    {
        "address": {
           "building": "1007",
           "coord": [ -73.856077, 40.848447 ],
           "street": "Morris Park Ave",
           "zipcode": "10462"
        },
        "borough": "Bronx",
        "cuisine": "Bakery",
        "grades": [
           { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
           { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
           { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
           { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
           { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
        ],
        "name": "Morris Park Bake Shop",
        "restaurant_id": "30075445"
      }
]
// Customer.collection.insertMany(customers,function (err, docs) {
//     if (err){ 
//         return console.error(err);
//     }
// })
module.exports = Customer;
