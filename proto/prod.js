class Product {
    constructor(name, quantity, price){
        this.name = name
        this.quantity = quantity
        this.price = price
    }
    sell(num){
        if (num > this.quantity){
            throw new Error("we dont have enough")
        }else this.quantity -= num
    }
    return(num){
        this.quantity += num
    }
    applyDiscount(percentage){
        if (percentage >= 1) this.price = 0
        else this.price = this.price - ( this.price * percentage)
    }
}

module.exports = Product