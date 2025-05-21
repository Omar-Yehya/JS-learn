console.log(`\n--------------------Task One-----------------------\n`);
function repeatingX(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i ++){
        if (str[i] ==='x' && str[i+1] === 'x')
            return true
    }
    return false
}

console.log(`\n--------------------Task Two-----------------------\n`);
function isPerfectSquare(num){
    let strNum = String(Math.sqrt(num))
    arr =strNum.split('')
    if(arr.includes('.') ) return false
    else return true
}

console.log(isPerfectSquare(24))


console.log(`\n--------------------Task Three-----------------------\n`);
function convertTemperature(temp, str){
    if (str === 'Celsius'){
        return (temp * 9/5) + 32
    } else return (temp -32) * 5/9
}





console.log(`\n--------------------Task Four-----------------------\n`);
let sum = 0
function sumOfEvenNumbers(arr){
    for (let i of arr){
        if (i % 2 === 0)
            sum += i
    }
    return sum
}




console.log(`\n--------------------Task Five-----------------------\n`);
function capsOdds(arr){
    let newArr = []

    for(let i = 0; i < arr.length; i ++){
       if (i % 2 === 0) newArr.push(arr[i])
       else newArr.push(arr[i].toUpperCase())
    }
  return newArr
}

console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))// 		-> ["Jan", "FEB", "Mar", "APR"]
