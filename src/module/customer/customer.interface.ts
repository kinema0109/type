import mongoose from "mongoose";

export interface ICustomer{
    address: string;
    city: string;
    cust_type_id:string;
    fed_id:string;
    portal_code:string;
    state:string;
    officer:{
        _id:mongoose.Schema.Types.ObjectId;
        fristname:string;
        lastname:string;
        state_date:string;
        title:string;
        cust_id:number,
        },
    invadividual:{
        _id:mongoose.Schema.Types.ObjectId;
        birth_date:string;
        first_name:string;  
        last_name:string;
    }
}