const Car = require("../proto/car");
const Person = require("../proto/Person");
const Product = require("../proto/prod");
const Programmer = require("../proto/programer");
// const car1 = new Car('Tesla', 'X', 2023, 8000)
// const car2 = new Car('BMW', 'X7', 2022, 60000)
// const car3 = new Car('Tesla', 'Y', 2020, 2700)
// let arr =[car1, car2, car3]


// arr.forEach(car => {
//     console.log(car)
//     car.drive()
//     car.brakes()
//     console.log(`${car.year} ${car.make} ${car.model} is $${car.price}`)

// })



const pen = new Product('Pen', 20, 10)
const mug = new Product('Mug', 10, 15)
const tShirt = new Product('T-Shirt', 5, 20)



const person = new Person('John joe', 44)
const coder = new Programmer('John Bro', 48, 'DooDoo Solutions')




