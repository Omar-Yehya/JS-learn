const Person = require("./Person")

class Programmer extends Person{
    constructor(fullname, age, companyName){
        super(fullname, age) // grabs from parent class Person
        this.companyName = companyName
    }
  
    codes(){
        return true 
    }
}



module.exports = Programmer 