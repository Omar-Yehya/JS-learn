const { getRandomNumber } = require('./../utils/Helpers.js')
const date = new Date()

let fullname =['omar','yehya','people']

let price = parseFloat('222.22222')  

let number2= 900000000000002222n //bigint

let books='10'
let book=books.toString()

let s1=Symbol('Foo');
let s2=Symbol('SOS');


fruits = ['apple', 'orange', 'banana']
Orangechecker=(fruits.includes('orange'))

const program ={
      name: 'SDET',
      start: 'Jan 20, 2025',
      duration: '6 months'
      
};
program.start='jan 27 2025'


const person = {
      fname: 'John',
      lname: 'Doe',
      age: 25,
      pin: 2000,
      account() {
          
           
            return `${this.fname} is a goofy he is ${this.age} and his pin is ${this.pin}`
          
      }
  };



/*
let num1=1;
let num2=10;
const numbers=[]
for (let i =0; i<3; i++){
      numbers.push(Math.floor(Math.random() *(num2 - num1 + 1))+ num1)
}

let BIG= Math.max(...numbers)
let SMALL=Math.min(...numbers)
*/

//UPPERCASE lower is toLowerCase
let company = 'TechGlobal';
let companyLower=company.toUpperCase()
//the .at(-1) easy way to get last 

let BOOL= company.startsWith('Tech') // startsWith/ endsWith checks to see what the string startswith/ends with




/*
search allows for Regular expresion so you can look for . and /^[aeiou]/
let str= 'DR Robtnics Me!an bean Machine'
console.log(str.indexOf('R'))
console.log(str.lastIndexOf('R'))
*/

//.trim method gets rid of wite space  in the front and back 


//slice gets values where sliced from
let school = 'TechGlobal School'
let S1=school.slice(0,4); // Tech
let S2= school.slice(4,10) // Global
let S3=school.slice(11) // School



//SPLIT METHOD splits string to array 

//Replace replaces replaceable replacements.


const funcExpression= function (num1,num2){
      return num1+num2
}
const arrowFunction = (num1, num2) => num1+num2;
const arrowInOneLine = (fname,lname) => `${fname[0]}${lname[0]}`;


//teranarry 
function theEnd(word, bool){
return  letter = bool ? word[0] : word.at(-1)
}

//goofy envoked IIFE  funtion that calls itself
(function(){
      console.log()
})()




//do abs21-n if bigger then 21 return double abs


function mixStart(word){
      
      let newWord= word.slice(1,word.length)
      return newWord.startsWith('ix')


}

/*  Switch 
let day = 0
console.log(day)
switch(true){
      case day<=5  && day>=1:
            console.log('weekday')
            break
      
      default:
            console.log("Weekend")
}
*/


// REGULAR EXPRESSION  
//  starts with / ends with /  
// i = ignore cases  
// use with search, replace, replaceAll, match 
// g find all cases 
// [abc] = look for any of these chars between brack 
//[0-9] numbers 
//[a-zA-z] all letters upper or lowwer 
// \d  looks for specific digit so /\d/
// \s white space characters  so /\s/
// . is any char so /e.g/ could be egg eng ect 
// + one or more 
// ^ starts with 
// $ ends with 
// * anywhere in middle
//.test  after RegEx
//example /[abc]/.test(var)




let rannum=26

if(rannum<=25){
      console.log('first')

}else if(rannum<=50){
      console.log('second')
}else if(rannum<=75){
      console.log('third')
}else{
      console.log('fourth')
}