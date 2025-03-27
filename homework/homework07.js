console.log(`\n--------------------Task One-----------------------\n`);
function hasUpperCase(str){
    for (let i of str){
        if (i === i.toUpperCase()) return true
    }
    return false 
}





console.log(`\n--------------------Task Two-----------------------\n`);

function noDigit(str){
    let newStr = ''
    for(let i of str){
        if (/[a-zA-Z]/.test(i)) newStr += i
    }
    return newStr
}




console.log(`\n--------------------Task Three-----------------------\n`);

function noVowel(str){
    let newStr = ''
    for (let i of str){
        if (/[aeiou]/i.test(i) ) continue
        else newStr += i
    }
    return newStr
}






console.log(`\n--------------------Task Four-----------------------\n`);

function no13(nums){
    return nums.map(x => x === 13 ?  0: x)
}



console.log(`\n--------------------Task Five-----------------------\n`);

function middleInt(a, b, c){
    return [a, b, c].sort((a,b) => a - b)[1]
}







console.log(`\n--------------------Task Six-----------------------\n`);

function sumOfDigits(str){
    let sum = 0
    for(let i of str){
        if (/[0-9]/.test(i)) sum += Number(i)
    }
    return sum
}







console.log(`\n--------------------Task Seven-----------------------\n`);

function arrFactorial(nums){
    const factorial = nums.map(x => {
        let prod = 1
        for (let i = x; i > 1; i --){
            prod *= i
        }
        return prod
    })
    return factorial
}






console.log(`\n--------------------Task Eight-----------------------\n`);

function categorizeCharacters(str) {
    let letters = ''
    let digits = ''
    let specials = ''

    for (let i of str) {
        if (i === ' ') continue
        else if (/[a-z]/i.test(i)) letters += i
        else if (/[0-9]/.test(i)) digits += i
        else specials += i

    }
    return [letters, digits, specials]

}




