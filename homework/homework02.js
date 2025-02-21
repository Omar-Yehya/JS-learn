console.log(`\n--------------------Task One-----------------------\n`)

let str1=parseInt("5")
let str2=parseInt("2")
console.log(`
The sum of ${str1} and ${str2} = ${str1+str2}
The product of ${str1} and ${str2} = ${str1 * str2}
The division of ${str1} and ${str2} = ${str1/str2}
The subtraction of ${str1} and ${str2} = ${str1-str2}
The remainder of ${str1} and ${str2} = ${str1%str2}
The exponentiation of ${str1} and ${str2} = ${str1**str2}
`)


console.log(`\n--------------------Task Two-----------------------\n`)

let s1= parseInt("200")
let s2= parseInt("-50")
console.log(`
The greatest valueis =${Math.max(s1,s2)}
The smallest value is =${Math.min(s1,s2)}
the average is =${(s1+s2)/2}
The absolute difference is =${(s1-s2)}
`)

console.log(`\n--------------------Task Three-----------------------\n`)
let random1 = Math.floor(Math.random() * (50-1+1)+1)
let random2 = Math.floor(Math.random() * (50-1+1)+1)

console.log(`The absolute difference between numbers is =${Math.abs(random1-random2)}`)

console.log(`\n--------------------Task Four-----------------------\n`)
let ran1=Math.floor(Math.random()* (50-1+1)+1)
let ran2=Math.floor(Math.random()* (50-1+1)+1)
let ran3=Math.floor(Math.random()* (50-1+1)+1)
let ran4=Math.floor(Math.random()* (50-1+1)+1)
let ran5=Math.floor(Math.random()* (50-1+1)+1)
console.log(`
The max value is =${Math.max(ran1,ran2,ran3,ran4,ran5)}
The min value is =${Math.min(ran1,ran2,ran3,ran4,ran5)}`)

console.log(`\n--------------------Task Five-----------------------\n`)
let ran_1= Math.floor(Math.random()*(100-50+1)+50)
let ran_2= Math.floor(Math.random()*(100-50+1)+50)
let ran_3= Math.floor(Math.random()*(100-50+1)+50)

console.log(`
The number 1 = ${ran_1}
the number 2 = ${ran_2}
The number 3 = ${ran_3}
The sum of numbers is = ${(ran_1+ran_2+ran_3)}
    `)

console.log(`\n--------------------Task Six-----------------------\n`)
let randomOne=Math.floor(Math.random()*(100-1+1)+1)
let randomTwo=Math.floor(Math.random()*(100-1+1)+1)
let randomThree=Math.floor(Math.random()*(100-1+1)+1)

console.log(`${((randomOne>25) && (randomTwo>25) && (randomThree>25))}`)
console.log(`\n--------------------Task Seven-----------------------\n`)
let name ="David"

console.log(`
The length of the name is= ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is= ${name.at(-1)}
The first three characters in the name are= ${name.slice(0,3)}
The last three characters in the name are= ${name.slice(-3)} 
    `)