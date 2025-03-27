const mathHelper = require("../utils/Helpers")


// before ES6
function Phone(brand, color, price){
    this.brand = brand
    this.color = color
    this.price = price

}

const phone1 = new Phone('Iphone', 'Blue', 1000)
const phone2 = new Phone('Samsung', 'Black', 1200)
const phone3 = new Phone('Nokia', 'Silver', 200)

// add prototype methods
Phone.prototype.call = function (){
    console.log(`${this.brand} is the brand`)
}

//phone1.call()
//console.log(phone1, phone2, phone3)


// After ES6

class Cars {
    constructor(make, model, price) {
        this.make = make
        this.model = model
        this.price = price

    }
    // Add instance methods
    topSpeed(){
        console.log(`${this.model} can go fast`)
    }
    tires(){
        return `${this.brand} has 4 tires`
    }
    static anyFunction(){  // invoked with template name 
        console.log('static')
    }

}
const car1 = new Cars('Chevy', 'Malibu', 13000)
const car2 = new Cars('Honda', 'Civic', 16000)
const car3 = new Cars('VW', 'Beatle', 11000)

//console.log(car1, car2, car3)
//car1.topSpeed()




//~_-~_-~_-~_-~_-~_-~_-~_-~_-~_-~_-~_-~_-~_-

function Teacher(fname, lname, age, field){
    this.fname = fname
    this.lname = lname
    this.age = age
    this.field = field
}

const teach1 = new Teacher('John', 'Doe', 35, 'Math')
const teach2 = new Teacher('Jane', 'Donnely', 55, 'English')
const teach3 = new Teacher('Sarah', 'Elly', 43, 'Art')
const teach4 = new Teacher('Adam', 'Bayer', 33, 'Science')

const Teachers = [teach1, teach2, teach3, teach4]


function oldestTeach(Arr){
    const old = Arr.reduce((acc, curr) => curr.age >= acc.age ? curr: acc)
    return old.fname 
}

function averageAge(Arr) {
    const ageSum = Arr.reduce((acc, curr) => acc += curr.age)
    return ageSum / Teachers.length
}

function youngestTeach(Arr) {
    const young = Arr.reduce((acc, curr) => curr.age <= acc.age ? curr : acc)
    return young.fname + ' ' + young.lname
}
//console.log(Teachers.map(x => x.fname + ' ' + x.lname))


//Parent classes: Super class
//Child classes: inherits from Parent 



// PRIVATE PROPERTIES 

class Customer{
    #secretInformation = 'assword'
}


const cust1 = new Customer()
const cust2 = new Customer()


// Example

class Program {
    static name = 'SDET'
    batchNo = 11

    functA() {
        console.log('A')
    }

    static functB() {
        console.log('B')
    }
}

const p1 = new Program()
// p1.functA()
// Program.functB()

// console.log(Program.name)



