import { Customers } from "./Customers.mjs";


export class BusinessCustomer extends Customers{
    constructor(name, age, membershipType, membershipCost, duration){
        super(name, age, membershipType, membershipCost)
        this.duration = duration
    }

    extendContract(){
        this.duration += 1 
        this.membershipCost -= (this.membershipCost * 0.15)
    }
}