import { Customers } from "./Customers.mjs";


export class VipCustomers extends Customers{
    constructor(name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost)
    }


    applyDiscount(){
        this.membershipCost -= (this.membershipCost * 0.10)
    }
}