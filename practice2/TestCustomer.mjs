import { Customers } from "./Customers.mjs"
import { VipCustomers } from "./VipCustomers.mjs"
import { BusinessCustomer } from "./BusinessCustomers.mjs"


const customer1 = new Customers ('John Doe', 30, 'Basic', 50)
const vipCustomer1 = new VipCustomers ('Jane Smith', 35, 'Gold', 100)
const busCustomer1 = new BusinessCustomer ('David Johnson', 40, 'Platinum', 200, 2)



customer1.upgradeMembership();           // Upgrades to Premium, adds 20% cost
vipCustomer1.applyDiscount();            // Applies 90% discount (leaves 10%)
busCustomer1.extendContract();           // Extends duration and reduces cost by 85%

// Print final details
console.log(customer1.getDetails());
console.log(vipCustomer1.getDetails());
console.log(busCustomer1.getDetails());