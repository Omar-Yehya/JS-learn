console.log(`\n--------------------Task One-----------------------\n`)
function countPos(nums){
    return nums.filter(x => x>0).length 
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))

console.log(`\n--------------------Task Two-----------------------\n`)


function countA(str){
    let cnt =0
    for(let i=0; i<str.length; i++){
        if (str[i].toLowerCase() =='a') cnt++
    }
    return cnt
}

console.log(`\n--------------------Task Three-----------------------\n`)

function countVowels(str){
    let cnt =0
    for(let i =0; i < str.length; i ++){
        if ('aeiouAEIOU'.includes(str[i])) cnt++
    }
    return cnt
}

console.log(`\n--------------------Task Four-----------------------\n`)

function countConsonants(str){
    let cnt =0
    for(let i =0; i < str.length; i ++){
        if ('aeiouAEIOU'.includes(str[i])) cnt++
    }
    return str.length-cnt
}
console.log(countConsonants("Hello World"))

console.log(`\n--------------------Task Five-----------------------\n`)

function countWords(str){
    str=str.trim()
    let arr = str.split(' ')
    return arr.length
}

console.log(countWords("   Javascript is fun    "))

console.log(`\n--------------------Task Six-----------------------\n`)

function factorial(num){
    let prod=1
    for(let i = num; i > 0; i --)prod *= i
    return prod
}

console.log(factorial(4))

console.log(`\n--------------------Task Seven-----------------------\n`)

function isPalindrome(str){
    let l = 0
    let r = str.length-1 
    while(l<=r){
        if(str[l].toLowerCase() === str[r].toLowerCase()){
            l += 1
            r -= 1
        }else return false
    }
    return true
}

console.log(`\n--------------------Task Eight-----------------------\n`)

function countMultipleWords(array){
    let cnt =0
    for(let i of array){
        if(i.trim().split(' ').length > 1)cnt++
    }
    return cnt
}
	
console.log(`\n--------------------Task Nine-----------------------\n`)

function count3OrLess(str){
    const arr =str.split(' ')
    let cnt =0
    for(let i of arr){
        if(i.length <= 3 && i)cnt ++
    }
    return cnt
}

console.log(`\n--------------------Task Ten-----------------------\n`)

function isPrime(n){
    if((n !== 2 && n % 2 === 0) || n <= 1) return false
    
    for(let i = 3; i < n-1; i ++){
        if (n % i === 0) return false
    }
    return true
}


console.log(`\n--------------------Task Eleven-----------------------\n`)

function add(arr1, arr2){
    const newArr = []

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i ++){
        if (i >= arr1.length) newArr.push(arr2[i])
        else if (i >= arr2.length) newArr.push(arr1[i])
        else newArr.push(arr1[i] + arr2[i])
    }
    return newArr
}

console.log(`\n--------------------Task Twelve-----------------------\n`)

function removeExtraSpaces(str){
    return str.trim().replaceAll(/\s+/g, ' ')
}

console.log(`\n--------------------Task Thirteen-----------------------\n`)

function findClosestTo10(nums){
    let close = Infinity

    for (let i of nums){
        if (i === 10) continue 
        if(Math.abs(i-10) < Math.abs(close - 10)){
            close = i
        }
    }
    return close

}





console.log(`\n--------------------Task Fourteen-----------------------\n`)

function isEmailValid(str){
    let arr= str.split(/[@\.]/)
    if (str.includes(' ')) return false
    if (arr.length !== 3) return false
    return arr[0].length >=2 && arr[1].length >=2 && arr[2].length >=2
}

isEmailValid("johndoe@gmail.com") 		


console.log(`\n--------------------Task Fifteen-----------------------\n`)


function isPasswordValid(str){
    let number = false
    let stringLower = false
    let stringUpper = false
    let special = false
    if(str.length < 8 || str.length > 16) return false
    for (let i of str){
        if (/[a-z]/.test(i) === true) stringLower = true
        if (/[A-Z]/.test(i) === true) stringUpper = true
        if (/[0-9]/.test(i) === true) number = true 
        if (/[\s]/.test(i) === true) return false
        if (/[^a-zA-Z0-9]/.test(i) === true) special = true

    }
    return (stringLower && stringUpper && number && special)
}






