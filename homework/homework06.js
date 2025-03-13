console.log(`\n--------------------Task One-----------------------\n`);

function noSpace(str){
    let newStr = ''

    for (let i of str){
        if (i !== ' ') newStr +=i

    }
    return newStr
}

console.log(`\n--------------------Task Two-----------------------\n`);

function replaceFirstLast(str){
    return str.trim().length < 2 ? '': str.at(-1) + str.slice(1, -1) + str[0]
}

console.log(`\n--------------------Task Three-----------------------\n`);

function hasVowel(str){
    return /[aeiou]/i.test(str)
}

console.log(`\n--------------------Task Four-----------------------\n`);

function checkAge(num){
    if (2023 - num < 16 && num < 2023) return "AGE IS NOT ALLOWED"
    if (2023 - num > 120 || num > 2023) return "AGE IS NOT VALID"
    return "AGE IS ALLOWED"
}

console.log(`\n--------------------Task Five-----------------------\n`);

function averageOfEdges(a, b, c){
    let max = Math.max(a, b, c)
    let min = Math.min(a, b, c)

    return (max+min)/2
}

console.log(`\n--------------------Task Six-----------------------\n`);

function noA(strs){
    const noA = []
    for (let i of strs){
        if(i[0].toLowerCase() === 'a') noA.push('###')
        else noA.push(i)   
        
    }
    return noA

}

console.log(`\n--------------------Task Seven-----------------------\n`);


function no3and5(nums){
    const newArr = []
    for(let i of nums){
        if (i % 3 === 0 && i % 5 === 0) newArr.push(101)
        else if(i % 3 === 0) newArr.push(100)
        else if (i % 5 === 0) newArr.push(99)
        else newArr.push(i)
    }
    return newArr
}

console.log(`\n--------------------Task Eight-----------------------\n`);


function countPrimes(nums){
    let cnt = 0
    for (let n of nums){
        if((n !== 2 && n % 2 === 0) || n <= 1) continue
    
        for(let i = 3; i < n-1; i ++){
            if (n % i === 0) continue
        }
        cnt ++
    }
    return cnt

}

console.log(`\n--------------------Task Nine-----------------------\n`);

function removeDuplicates(array){
    return array.filter( (num, index, self) => self.indexOf(num) === index )

}

console.log(`\n--------------------Task Ten-----------------------\n`);

function isDateFormatValid(str){

    let format = str.trim().split(/[/]/)

    if (format.length !== 3) return false

    let monthNum = format[0].trim()
    let dayNum = format[1].trim()
    let yearNum = format[2].trim()
    
    const monthValid = ((monthNum.length === 2) && (monthNum > 0 && monthNum < 13)) 
    const dayValid = ((dayNum.length === 2) && (dayNum > 0 && dayNum < 32))
    const yearValid = (yearNum.length === 4) 

    return (monthValid && dayValid && yearValid)

   
}

console.log(`\n--------------------Task Eleven-----------------------\n`);

function secondMax(nums){

    let newArr =nums.filter( (num, index, self) => self.indexOf(num) === index )
    newArr.sort((a,b) => b - a)
    return newArr.length === 1 ? newArr[0]: newArr[1]

}


console.log(`\n--------------------Task Twelve-----------------------\n`);

function secondMin(nums){

    let newArr =nums.filter( (num, index, self) => self.indexOf(num) === index )
    newArr.sort((a,b) => a - b)
    return newArr.length === 1 ? newArr[0]: newArr[1]
}

console.log(`\n--------------------Task Thirteen-----------------------\n`);

function mostRepeated(arr){
    let hashy = {}
    let most 
    let max = 0
    for (let i of arr){
        if (!(i in hashy)) hashy[i] = 1
        else hashy[i] ++
    }

    for(let key in hashy){
        if (hashy[key] > max ){
            max = hashy[key]
            most = key
        }
    }
  
    return most
}

console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))



// let maxKey = null;
// let maxCount = 0;
// // Loop over keys in the hash to find the one with the highest count
// for (let key in hashy) {
//   if (hashy[key] > maxCount) {
//     maxCount = hashy[key];
//     maxKey = key;
//   }
// }

// return maxKey;
// }