console.log(`\n--------------------Task One-----------------------\n`)
for(let i=1; i <= 100; i++){
    if(i % 7 ===0){
        console.log(i)
    }
}

console.log(`\n--------------------Task Two-----------------------\n`)

for(let i=1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i)
    }
}

console.log(`\n--------------------Task Three-----------------------\n`)

for (let i = 100; i >= 50; i--){
    if(i % 5 === 0){
        console.log(i)
    }
}

console.log(`\n--------------------Task Four-----------------------\n`)

for(let i = 0; i <= 7; i ++){
    console.log(`The Square of ${i} = ${i ** 2}`)
}
console.log(`\n--------------------Task Five-----------------------\n`)

let sum = 0
for(let i = 1; i <=10; i++){
    sum += i
}
console.log(sum)
console.log(`\n--------------------Task Six-----------------------\n`)

let factorial = 1
let randomNumber = Math.floor(Math.random()* (10 - 1 + 1)+1)
for(let i = 1; i <= randomNumber; i++){
    factorial *= i
}
console.log(factorial)

console.log(`\n--------------------Task Seven-----------------------\n`)

let cnt = 0
while(true){
let randomNumber1 = Math.floor(Math.random()* (100 - 1 + 1)+1) 
    if (randomNumber1 % 5 === 0){
        console.log(`The random number is ${randomNumber1} and it took ${cnt} attempts`)
        break
    }
    cnt++

}

console.log(`\n--------------------Task Eight-----------------------\n`)

let countries = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(countries)
console.log(countries.sort())

console.log(`\n--------------------Task Nine-----------------------\n`)

let dawgss = ['Scooby Doo', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log(dawgss)
console.log(dawgss.includes('Pluto'))

console.log(`\n--------------------Task Ten-----------------------\n`)

let kitkat = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
console.log(kitkat.sort())
console.log(kitkat.includes('Garfield') && kitkat.includes('Felix'))

console.log(`\n--------------------Task Eleven-----------------------\n`)

let numbers = [10.5, 20.75, 70, 80, 15.75]
for(let i of numbers){
    console.log(i)
}
console.log(numbers)

console.log(`\n--------------------Task Twelve-----------------------\n`)

let stuff = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
let b_pCnt = 0
let penBookCount =0

for(let i of stuff){
    if(i[0].toUpperCase() === 'P' || i[0].toUpperCase() === 'B'){
        b_pCnt ++
    }
    if(i.toLowerCase().includes('pen') || i.toLowerCase().includes('book')){
        penBookCount ++
    }
}

console.log(stuff)
console.log(b_pCnt)
console.log(penBookCount)

console.log(`\n--------------------Task Thirteen-----------------------\n`)

let arr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let greater = 0
let smaller = 0
let equals = 0
for(let i of arr){
    if(i > 10) greater ++
    if(i < 10) smaller ++
    if(i === 10) equals ++
    
}
console.log(arr)
console.log(`Elements more than 10 = ${greater}`)
console.log(`Elements less than 10 = ${smaller}`)
console.log(`Elements that are 10 = ${equals}`)

console.log(`\n--------------------Task Fourteen-----------------------\n`)

let firstArray = [5, 8, 13, 1, 2 ]
let secondArray = [9, 3, 67, 1, 0 ]
let biggerArray = []

for(let i=0; i <= firstArray.length -1; i++){
    if(firstArray[i] >= secondArray[i]){
        biggerArray.push(firstArray[i])
    }else{
        biggerArray.push(secondArray[i])
    }
    
}

console.log(firstArray)
console.log(secondArray)
console.log(biggerArray)

console.log(`\n--------------------Task Fifteen-----------------------\n`)

function firstDuplicate(array){
    let start = 0
    
    while(start !== array.length -1){
       
        for(let i=start+1; i <= array.length-1; i++){
            if(array[start] === array[i]){
                return array[i]
                
            }
        }
        start++
        
    }
    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))

console.log(`\n--------------------Task Sixteen-----------------------\n`)

function getDuplicates(arr){
    let start = 0
    let dup=[]
    
    while(start !== arr.length -1){
       
        for(let i=start+1; i <= arr.length-1; i++){
            if(arr[start] === arr[i] && !(arr[i] in dup)){
                dup.push(arr[i])
                
            }
           
        }
        start++
        
    }
    return dup
}



console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))

console.log(`\n--------------------Task Seventeen-----------------------\n`)

function reverseStringWords(str){
    let newStr = str.split('').reverse().join('')
    return newStr.trim()
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))

console.log(`\n--------------------Task Eighteen-----------------------\n`)

function getEvens(a, b){
    let start =Math.min(a,b)
    let end = Math.max(a,b)
    let arr=[]
    for(let i =start; i <= end; i++){
        if(i % 2 === 0) arr.push(i)
    }
    return arr
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))




console.log(`\n--------------------Task Nineteen-----------------------\n`)

function getMultipleOf5(a, b){

    let arr=[]
    if(a >= b){
        for (let i = a; i >= b; i--){
            if(i % 5 === 0)arr.push(i)
        }
    }else{
        for(let i = a; i <= b; i ++){
            if (i % 5 === 0) arr.push(i)
        }
    }
    return arr
}

  
console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))



console.log(`\n--------------------Task Twenty-----------------------\n`)


function fizzBuzz(a,b){
    let start = Math.min(a,b)
    let end = Math.max(a,b)
    let newStr = ''
    for(let i =start; i <= end; i++){

        if(i % 3 === 0 && i % 5 === 0){
            newStr += 'FizzBuzz'
            newStr += ' | '
        }else if(i % 5 === 0){
            newStr += 'Buzz'
            newStr += ' | '
        }else if(i % 3 === 0){
            newStr += 'Fizz'
            newStr +=' | '
        }
        else{
            newStr +=  i
            newStr += ' | '
        }


    }
    newStr = newStr.slice(0, -2)
    return newStr
}

console.log(fizzBuzz(13, 18))
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))


