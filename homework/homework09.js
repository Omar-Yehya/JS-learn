console.log(`\n--------------------Task One-----------------------\n`);
function fizzBuzz1(num) {
    if (num % 5 === 0 && num % 3 === 0) return 'FizzBuzz'
    else if (num % 5 === 0) return 'Buzz'
    else if (num % 3 === 0) return 'Fizz'
    else return num
}

console.log(`\n--------------------Task Two-----------------------\n`);
function fizzBuzz2(num) {
    const fizzArr = []

    for (let i = 1; i < num + 1; i++) {
        if (i % 5 === 0 && i % 3 === 0) fizzArr.push('FizzBuzz')
        else if (i % 5 === 0) fizzArr.push('Buzz')
        else if (i % 3 === 0) fizzArr.push('Fizz')
        else fizzArr.push(i)
    }
    return fizzArr
}

console.log(`\n--------------------Task Three-----------------------\n`);
function findSumNumbers(str) {
    let sum = 0
    let nums = []
    let strNum = ''
    for (let i of str) {

        if (/[0-9]/.test(i)) {
            strNum += i
        } else {
            if (strNum !== '') {
                nums.push(strNum)
                strNum = ''
            }
        }
    }

    for (let i of nums) {
        sum += Number(i)
    }
    return sum
}



console.log(`\n--------------------Task Four-----------------------\n`);
function findBiggestNumber(str) {

    let nums = []
    let strNum = ''
    for (let i of str) {

        if (/[0-9]/.test(i)) {
            strNum += i
        } else {
            if (strNum !== '') {
                nums.push(strNum)
                strNum = ''
            }
        }
    }

    return Math.max(...nums)

}
console.log(`\n--------------------Task Five-----------------------\n`);
function countOccurrencesOfCharacters(str) {
    let l = 0
    let r = 1
    let cntStr = ''

    while (r <= str.length) {
        if (str[l] === str[r]) {
            r++
        } else if (str[l] !== str[r]) {
            cntStr += r - l
            cntStr += str[l]
            l = r
            r++
        }

    }
    return cntStr
}


console.log(`\n--------------------Task Six-----------------------\n`);
/*
F(0) = 0 (base case)
F(1) = 1 (base case)
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
*/
function fibonacciSeries1(n) {
    let fibArr = []
    for (let i = 0; i < n; i++) {
        if (i === 0) fibArr.push(0)
        else if (i === 1) fibArr.push(1)
        else fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }

    return fibArr

}



console.log(`\n--------------------Task Seven-----------------------\n`);
function fibonacciSeries2(n) {
    let fibArr = []
    for (let i = 0; i < n; i++) {
        if (i === 0) fibArr.push(0)
        else if (i === 1) fibArr.push(1)
        else fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }

    return fibArr[n - 1]
}


console.log(`\n--------------------Task Eight-----------------------\n`);
function findUniques(A1, A2) {

    const newArr = []
    for (let i of A1) {
        if (A2.includes(i)) continue
        else {
            if (!newArr.includes(i)) newArr.push(i)

        }

    }
    for (let i of A2) {
        if (A1.includes(i)) continue
        else {
            if (!newArr.includes(i)) newArr.push(i)

        }
    }


    return newArr
}


console.log(`\n--------------------Task Nine-----------------------\n`);
function isPowerOf3(n) {
    while (n >= 1) {
        if (n === 1) return true
        n = n / 3
    }
    return false
}

