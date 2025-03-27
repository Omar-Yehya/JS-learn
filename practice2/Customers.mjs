export class Customers{
    constructor(name, age, membershipType, membershipCost){
        this.name = name
        this.age = age
        this.membershipCost = membershipCost
        this.membershipType = membershipType
    }

    getDetails(){
        return (`${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`)
    }

    upgradeMembership(){
        if (this.membershipType !== 'Premium'){
            this.membershipType = 'Premium'
            this.membershipCost += (this.membershipCost *= 0.20)
        }
    }
}