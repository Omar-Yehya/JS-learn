class Person{
    constructor(fullname, age){
        this.fullname = fullname
        this.age = age
    }
    eat(str = 'food'){
        console.log(`${this.fullname} eats ${str}`)
    }
    sleep(num = 'unknown'){
        console.log(`${this.fullname} sleeps ${num} hours`)
    }
    walk(){
        return true
    }


}

const person1 = new Person('Omar Yehya', 21)



module.exports = Person


