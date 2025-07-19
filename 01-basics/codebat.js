function close10(int1, int2) {

    if (Math.abs(int1 - 10) === Math.abs(int2 - 10)) {
        return 0
    } else if (Math.abs(int1 - 10) < Math.abs(int2 - 10)) {
        return int1
    }
    return int2
}


function stringE(word) {
    eCounter = {}
    for (let letter of word) {
        if (!(letter in eCounter)) {
            eCounter[letter] = 1
        } else {
            eCounter[letter]++
        }
    }

    if (eCounter['e'] <= 3 && eCounter['e'] > 0) {
        return true
    } else {
        return false
    }

}


function everyNth(word, index) {
    let newStr = ''
    for (let i = 0; i < word.length; i += index) {
        newStr += word[i]
    }

    return newStr
}


function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile && !bSmile) || (!aSmile && bSmile)) {
        return false
    }
    return true

}
//switch the first and last word 
function switchFirstAndLast(word) {

    let first = word.slice(0, word.indexOf(' '))
    let last = word.slice(word.lastIndexOf(' ') + 1)
    let middle = word.slice(word.indexOf(' '), word.lastIndexOf(' ') + 1)
    console.log(last, middle, first)
}

function switchFirstAndLastList(word) {
    const wordList = word.split(' ')
    let fword = wordList[0]
    let lword = wordList[wordList.length - 1]
    let middle = wordList[1, wordList.length - 2]
    console.log(lword, middle, fword)

}

// before 7 or after 20. Return true if we are in trouble.



function parrotTrouble(talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true
    } else {
        return false
    }

}



function posNeg(a, b, negative) {
    if (negative) {
        return (a < 0 && b < 0)
    } else {
        return ((a < 0 && b > 0) || (a > 0 && b < 0))
    }
}

function frontBack(string) {
    if (string.length == 1) {
        return string
    }
    return string.at(-1) + string.slice(1, -2) + string[0]
}

function or35(n) {
    return (n % 3 == 0 || n % 5 == 0)
}

function icyHot(temp1, temp2) {
    return ((temp1 > 100 && temp2 < 0) || (temp2 > 100 && temp1 < 0))
}

function loneTeen(a, b) {
    if (((a >= 13 && a <= 19) &&
        (b < 13 || b > 19)) ||
        ((b >= 13 && b <= 19) &&
            (a < 13 || a > 19))
    ) {
        return true
    }
    return false
}


function startOz(string) {
    if (string[0] == 'o' && string[1] == 'z') {
        return string.slice(0, 2)
    } else if (string[0] == 'o' && string[1] != 'z') {
        return string[0]
    } else if (string[0] != 'o' && string[1] == 'z') {
        return string[1]
    } else {
        return ""
    }
}

function in3050(a, b) {
    return ((a >= 30 && b <= 40) || (a >= 40 && b <= 50))
}


function lastDigit(a, b) {
    let A = a.toString()
    let B = b.toString()
    return (A.at(-1) == B.at(-1))
}

function sumDouble(a, b) {
    if (a === b) {
        return (a + b) * 2
    }
    return a + b
}


function makes10(a, b) {
    if (a === 10 || b === 10) {
        return true
    } else if (a + b === 10) {
        return true
    }
    return false
}

function notString(str) {
    if (str.slice(0, 3) === 'not') {
        return str
    } else {
        return `not ${str}`
    }

}

function front3(str) {
    let three = str.slice(0, 3)
    return three + three + three
}

function front22(str) {
    if (!str) {
        return ""
    }
    if (str.length < 2) {
        return str + str + str
    } else {
        return str.slice(0, 2) + str + str.slice(0, 2)
    }
}

function in1020(a, b) {
    if ((a < 20 && a > 10) || (b < 20 && a > 10)) {
        return true
    }
    return false
}

function delDel(str) {
    if (!str) {
        return " "
    }
    let skipValue = str.search('del')
    if (skipValue != -1) {
        return (str.slice(0, skipValue) + str.slice(skipValue + 3, str.length))
    }
    return str
}

function intMax(a, b, c) {
    return Math.max(a, b, c)
}

function max1020(a, b) {
    if ((a >= 10 || a <= 20) && (b >= 10 || b <= 20)) {
        return Math.max(a, b)
    } else if ((a >= 10 || a <= 20) && (b < 10 || b >= 20)) {
        return a
    } else if ((a < 10 || a > 20) && (b < 10 || b >= 20)) {
        return b
    }
    return 0

}

function endUp(word) {
    if (!word) {
        return ""
    }
    if (word.length <= 3) {
        return word.toUpperCase()
    } else {
        return word.slice(0, word.length - 3) + word.slice(word.length - 3).toUpperCase()

    }
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/


function stringTimes(str, n) {
    let newString = ""

    for (let i = 0; i < n; i++) {
        newString += str
    }
    return newString
}

function doubleX(str) {
    let firstX = str.search('x')
    if (firstX == -1) {
        return false
    }
    return (str[firstX + 1] == 'x')
}

//remove everything that was not a letter 

//could use forr loop or .join() and then includes 
function array123(nums) {
    let cnt = 0
    while (cnt < nums.length - 2) {

        if ((nums[cnt] == 1) && (nums[cnt + 1] == 2) && (nums[cnt + 2] == 3)) {
            return true

        }
        cnt++
    }
    return false
}

//my solution  better solution use forloop  first if statement not needed 
function altPairs(str) {
    let switchState = true
    let newString = ''
    let index = 0

    while (index <= str.length - 1) {
        if (index > str.length) {
            return newString
        }
        if (switchState) {
            newString += str[index]
            index += 1
            switchState = false
        } else if (!switchState) {
            newString += str[index]
            index += 3
            switchState = true
        }

    }
    return newString
}


function noTriples(nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2])
            return false
    }
    return true


}


function frontTimes(str, n) {
    let newStr = ''
    for (let i = 0; i < n; i++) {
        newStr += str.slice(0, 3)

    }
    return newStr
}

function stringBits(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i += 2) {
        newStr += str[i]

    }
    return newStr
}

function arrayCount9(nums) {
    let cnt = 0

    for (let i of nums) {
        if (i === 9) {
            cnt++
        }
    }
    return cnt
}

function stringMatch(a, b) {
    let cnt = 0
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == b[i] && a[i + 1] == b[i + 1]) {
            cnt++
        }

    }
    return cnt
}
// continue 
function stringYak(str) {
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'y' && str[i + 2] == 'k') {
            i += 2
            continue
        }
        newStr += str[i]

    }
    return newStr

}

//hish the fish 
function has271(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 5 == (nums[i + 1]) && (nums[i] - 1 == (nums[i + 2])) || (nums[i] - 2 == (nums[i + 2])) || nums[i] + 1 == (nums[i + 2])) {
            return true
        }

    }
    return false

}

function countXX(str) {

    let cnt = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x' && str[i + 1] == 'x') {
            cnt++
            continue
        }
    }
    return cnt
}


function stringSplosion(str) {

    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        newStr += str.slice(0, i)

    }
    return newStr += str.slice(0)
}

function arrayFront9(nums) {

    for (let i = 0; i < 4; i++) {
        if (nums[i] == 9) {
            return true
        }
    }
    return false

}

function stringX(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x' && i > 0 && i < str.length - 1) {
            continue
        }
        newStr += str[i]
    }
    return newStr
}


function array667(nums) {
    let cnt = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)) {
            cnt++
        }
    }
    return cnt
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function helloName(name) {
    return `Hello ${name}!`
}
function makeOutWord(out, word) {
    return out.slice(0, 2) + word + out.slice(2)
}
function firstHalf(str) {
    return str.slice(0, str.length / 2)
}
function nonStart(a, b) {
    return a.slice(1) + b.slice(1)
}

function theEnd(str, front) {
    if (front) {
        return str[0]
    }
    return str.at(-1)
}

function endsLy(str) {
    return str.slice(-2) == 'ly'
}

function middleThree(str) {
    let mid = Math.floor(str.length / 2)
    return str.slice(mid - 1, mid + 2)
}

function lastChars(a, b) {
    if (!a) {
        return `@${b.at(-1)}`
    } else if (!b) {
        return `${a[0]}@`
    }
    return a[0] + b.at(-1)

}

function seeColor(str) {
    let colorRed = str.slice(0, 3)
    let colorBlue = str.slice(0, 4)
    if (colorRed == 'red') {
        return colorRed
    } else if (colorBlue == 'blue') {
        return colorBlue
    }
    return ''
}

function extraFront(str) {
    let newStr = ''
    for (let i = 0; i < 3; i++) {
        newStr += str.slice(0, 2)
    }
    return newStr
}


//Given a string and a second "word" string, we'll say that the word matches the string 
// if it appears at the front of the string, except its first char does not need to match 
// exactly. On a match, return the front of the string, or otherwise return the empty string.
//  So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The 
// word will be at least length 1.
function startWord(str, word) {
    let index = str.search(word.slice(1, word.length))
    if (word.length == 1) {
        return str[0]
    } else if (index > 1) {
        return ''
    }
    return str.slice(index - 1, word.length)

}

function makeAbba(a, b) {
    return a + b + b + a
}

function extraEnd(str) {
    let lastTwo = str.slice(-2)

    return lastTwo + lastTwo + lastTwo
}

function withoutEnd(str) {
    return str.slice(1, str.length - 1)

}

function left2(str) {
    if (str.length < 3) {
        return str
    }
    return str.slice(2) + str.slice(0, 2)
}

function withouEnd2(str) {
    return str.slice(1, -1)
}

function nTwice(str, n) {
    return str.slice(0, n) + str.slice(-n)
}

function hasBad(str) {
    return str.search('bad') < 2
}

function conCat(a, b) {
    if (a.at(-1) == b[0]) {
        return a.slice(0, -1) + b
    }
    return a + b
}

function frontAgain(str) {
    return str.slice(0, 2) === str.slice(-2)
}


function without2(str) {
    if (str.lastIndexOf(str.slice(0, 2)) !== 0) {
        return str.slice(2)
    }
    return str
}

// let char2='4'
// let char2Code=char2.charCodeAt(0)
// if(char2Code >= 48 && char2Code <= 57){
//     console.log('digit')
// }else if((char2Code >= 65 && char2Code <=90) || (char2Code >=97 && char2Code <= 122)){
//     console.log('letter')
// }else{
//     console.log('invalid')
// }



function withoutX(str) {
    let Str = str.replace(/[x]$/i, '')
    return Str.replace(/^[x]/i, '')
}

function makeTags(tag, word) {
    return `<${tag}>${word}<${tag}>`
}

function firstTwo(str) {
    return str.length <= 2 ? str : str[0] + str[1]
}

function comboString(a, b) {
    if (a.length <= b.length) {
        return a + b + a
    }
    return b + a + b

}

function right2(str) {
    if (str.length <= 2) {
        return str
    }

    return str.slice(-2) + str.slice(0, -2)

}

function middleTwo(str) {
    let mid = str.length / 2
    return str[mid - 1] + str[mid]
}



// java is 4 char long 
// 3 is our number 
// 3+2 = 5 
//5 is biiger then java.length so return the first 2 char 

function twoChar(str, index) {
    if (index + 2 > str.length) {
        return str.slice(0, 2)

    }
    return str.slice(index, index + 2)
}

function atFirst(str) {
    if (str.length < 2) {
        return `${str}@`
    }
    return str.slice(0, 2)

}

function lastTwo(str) {
    if (str.length === 1) {
        return str
    } else if (str.length === 2) {
        return str.at(-1) + str[0]
    }
    return str.slice(0, -2) + str.at(-1) + str.at(-2)
}

function minCat(a, b) {

    if (a.length === b.length) {
        return a + b
    } else if (a.length >= b.length) {
        return a.slice(-b.length) + b
    }
    return a + b.slice(-a.length)
}

function deFront(str) {
    if (str[0] === 'a' && str[1] === 'b') {
        return str
    } else if (str[0] === 'a' && str[1] !== 'b') {
        return str[0] + str.slice(2)
    } else if (str[0] !== 'a' && str[1] === 'b') {
        return str[1] + str.slice(2)
    }
    return str.slice(2)

}

function withoutX2(str) {
    if (str[0] === 'x' && str[1] === 'x') {
        return str.slice(2)
    } else if (str[0] === 'x' && str[1] !== 'x') {
        return str.slice(1)
    } else if (str[0] !== 'x' && str[1] === 'x') {
        return str[0] + str.slice(2)
    }
    return str
}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/


function firstLast6(nums) {
    return nums[0] === 6 || nums[nums.length - 1] === 6

}

function commonEnd(a, b) {
    return a[0] === b[0] || a.at(-1) === b.at(-1)
}


function reverse3(nums) {
    return nums.reverse()
}

function middleWay(a, b) {
    return newArray = [a[1], b[1]]

}

function no23(nums) {
    return !(nums.includes(3) || nums.includes(2))
}

function fix23(nums) {
    if (nums[0] === 2 && nums[1] === 3) {
        nums = [nums[0], 0, nums[2]]
        return nums
    } else if (nums[1] === 2 && nums[2] === 3) {
        nums = [nums[0], nums[1], 0]
        return nums
    }
    return nums
}

function makeMiddle(nums) {
    let mid = nums.length / 2
    return [nums[mid - 1], nums[mid]]
}

function midThree(nums) {
    let mid = Math.floor(nums.length / 2)
    return [nums[mid - 1], nums[mid], nums[mid + 1]]

}

function unlucky1(nums) {
    return nums[0] === 1 && nums[1] === 3
        || nums[1] === 1 && nums[2] === 3
        || nums[nums.length - 2] === 1 && nums[nums.length - 1] === 3
        || nums[nums.length - 3] === 1 && nums[nums.length - 2] === 3

}


function sameFirstLast(nums) {
    return nums.length >= 1 && nums[0] === nums.at(-1)

}

function sum3(nums) {
    return nums[0] + nums[1] + nums[2]
}

function maxEnd3(nums) {
    let [num1, num2, num3] = nums
    let max = Math.max(num1, num2, num3)
    nums = [max, max, max]
    return nums
}

function makeEnds(nums) {
    return [nums[0], nums.at(-1)]
}

function makeLast(nums) {
    let doubleLength = nums.length * 2
    let db = []
    for (let i = 0; i < doubleLength - 1; i++) {
        db.push(0)
    }
    db.push(nums.at(-1))
    return db

}

function start1(a, b) {
    //console.log(( a[0] === 1 ? 1: 0) +(b[0] === 1 ? 1: 0)) better way 
    let cnt = 0
    if (a[0] === 1) {
        cnt++
        if (b[0] === 1) {
            return 2
        }
    } else if (b[0] === 1) {
        return 1
    }
    return cnt
}

function plusTwo(a, b) {
    let newArray = []
    newArray = [...a, ...b]
    return newArray
}

function maxTriple(nums) {

    return Math.max(nums[0], nums[1], nums[2])
}

function make2(a, b) {
    let newArray = [...a, ...b].slice(0, 2)
    return newArray
}

function makePi() {
    return [3, 1, 4]
}

function rotateLeft3(nums) {
    return [nums[1], nums[2], nums[0]]
    //return nums.slice(1).concat(nums[0]) much better way 
}

function sum2(nums) {
    if (nums.length < 2) {
        if (nums.length === 0) {
            return 0
        }
        return nums[0]
    }
    return nums[0] + nums[1]
}


function has23(nums) {
    return nums.includes(2) || nums.includes(3)
}

function double23(nums) {

    return (nums[0] === 2 && nums[1] === 2) || (nums[0] === 3 && nums[1] === 3)
}

//FILTER GOATED arrar.filter(condition),index

function biggerTwo(a, b) {
    if (a[0] + a[1] >= b[0] + b[1]) {
        return a
    }
    return b
}

function swapEnds(nums) {
    if (nums.length > 1) {
        let last = nums.at(-1)
        nums[nums.length - 1] = nums[0]
        nums[0] = last

    }
    return nums


}

function frontPiece(nums) {
    if (nums.length >= 2) {
        return [nums[0], nums[1]]
    } else if (nums.length === 0) {
        return []
    }
    return [nums[0]]
}


function front11(a, b) {
    let result = []
    if (a.length > 0) result.push(a[0])
    if (b.length > 0) result.push(b[0])

    return result
}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function mapBully(map1) {
    temp = map1['a']
    map1['a'] = ''
    map1['b'] = temp

    return map1

}

function topping1(object) {
    object['bread'] = 'butter'
    if (object['ice cream']) {
        object['ice cream'] = 'cherry'
    }


    return object
}

function mapAB2(object) {
    if (('a' in object && 'b' in object) && (object['a'] === object['b'])) {
        delete object.a
        delete object.b

    }
    return object
}

function mapShare(object) {
    if (object['a']) {
        object['b'] = object['a']
    }

    delete object.c

    return object
}

function topping2(object) {
    if ('ice cream' in object) {
        object['yogurt'] = object['ice cream']
    }
    if ('spinach' in object) {
        object['spinach'] = 'nuts'
    }
    return object
}

function mapAB3(object) {
    if (!('a' in object) && ('b' in object)) {
        object['a'] = object['b']

    } else if (!('b' in object) && ('a' in object)) {
        object['b'] = object['a']
    }

    return object
}

function mapAB(object) {
    if ('a' in object && 'b' in object) {
        object['ab'] = object['a'] + object['b']
    }
    return object
}

function topping3(object) {
    if (object['potato']) {
        object['fries'] = object['potato']
    }
    if (object['salad']) {
        object['spinach'] = object['salad']
    }
    return object

}

function mapAB4(object) {
    if ('a' in object && 'b' in object) {
        if (object['a'].length > object['b'].length) {
            object['c'] = object['a']
        } else if (object['a'].length < object['b'].length) {
            object['c'] = object['b']
        } else {
            object['a'] = ''
            object['b'] = ''
        }
    }

    return object
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function cigarParty(cigars, isWeekend) {
    return (cigars >= 40 && cigars <= 60 && isWeekend === false) || (cigars >= 40 && isWeekend === true)
}

function dateFashion(you, date) {
    if (you >= 8 || date >= 8) {
        return 2
    } else if (you <= 2 || date <= 2) {
        return 0
    }
    return 1

}

function squirrelPlay(temp, isSummer) {
    return (temp >= 60 && temp <= 90 && isSummer === false) || (temp >= 60 && temp <= 100 && isSummer === true)
}


function caughtSpeeding(speed, isBirthday) {
    if (speed >= 81) {
        if (isBirthday === true && speed <= 86) {
            return 0
        }
        return 2
    } else if (speed >= 61 && speed <= 80) {
        if (isBirthday === true && speed <= 85) {
            return 0
        }
        return 1
    }
    return 0
}

function sortaSum(a, b) {
    let sum = a + b
    if (sum >= 10 && sum <= 19) {
        return 20
    }
    return sum
}

function alarmClock(day, vacation) {
    if ((vacation === true && day >= 1 && day <= 5) || (vacation === false && (day === 0 || day === 6))) {
        return '10:00'
    } else if (vacation === true && (day === 0 || day === 6)) {
        return 'off'
    }
    return '7:00'
}

function love6(a, b) {
    return (a === 6 || b === 6) || (a + b === 6) || Math.abs(a - b) === 6
}

function in1To10(n, outsideMode) {
    if (outsideMode === true && (n <= 1 || n >= 10)) {
        return true
    } else if (n >= 1 && n <= 10) {
        return true
    }
    return false
}

function specialEleven(n) {
    return n % 11 === 0 || n % 11 === 1
}

function more20(n) {
    return n % 20 === 1 || n % 20 === 2
}

function old35(n) {
    return (n % 5 === 0 && n % 3 !== 0) || (n % 3 === 0 && n % 5 !== 0)
}

function less20(n) {
    return n % 20 === 18 || n % 20 === 19
}

function nearTen(num) {
    return num % 10 === 1 || num % 10 === 2 || num % 10 === 9 || num % 10 === 8
}

function teenSum(a, b) {
    if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
        return 19
    }
    return a + b
}

function answerCell(isMorning, isMom, isAsleep) {
    if (isAsleep) {
        return false
    } else if (isMorning && isMom) {
        return true
    } else if (!isMorning) {
        return true
    }
    return false
}

function teaParty(tea, candy) {
    if (tea <= 5 || candy <= 5) {
        return 0
    } else if (tea * 2 <= candy || candy * 2 <= tea) {
        return 2
    }
    return 1
}


function fizzString(str) {
    let newStr = ''
    if (str[0] === 'f') {
        newStr += 'Fizz'
    }
    if (str.at(-1) === 'b') {
        newStr += 'Buzz'
    }
    return newStr || str

}

function fizzString2(n) {
    let str = ''
    if (n % 3 === 0) {
        str += "Fizz"
    }
    if (n % 5 === 0) {
        str += "Buzz"
    }
    if (str) {
        return str += '!'
    } else {
        return String(n) + '!'
    }
}

// git MERGE VS git REBASE 


function twoAsOne(a, b, c) {
    let checker = Math.max(a, b, c) - Math.min(a, b, c)
    if (checker === a || checker === b || checker === c) {
        return true
    }
    return false

}

function inOrder(a, b, c, bOk) {
    if (bOk) {
        return c > a && c > b
    }
    return a < b && b < c
}

function inOrderEqual(a, b, c, equalOk) {
    if (equalOk) {
        return c >= b && b >= a
    }
    return a < b && b < c
}

function lastDigit(a, b, c) {
    return a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10
}

function lessBy10(a, b, c) {
    return (Math.max(a, b, c) - Math.min(a, b, c)) >= 10
}

function withoutDoubles(die1, die2, noDoubles) {
    if (noDoubles && die1 === die2) {
        if (die1 === 6) {
            die1 = 1
        } else {
            die1 += 1
        }
        return die1 + die2
    }

    return die1 + die2
}

function maxMod5(a, b) {
    if (a === b) {
        return 0
    }
    return a % 5 === b % 5 ? Math.min(a, b) : Math.max(a, b)
}

function redTicket(a, b, c) {
    if (a === 2 && b === 2 && c === 2) {
        return 10
    } else if (a === b && b === c) {
        return 5
    }
    return (a !== b && a !== c) ? 1 : 0
}

function greenTicket(a, b, c) {
    if (a === b && b === c) {
        return 20
    }
    return (a === b || a === c || b === c) ? 10 : 0
}

function blueTicket(a, b, c) {
    if (a + b === 10 || a + c === 10 || c + b === 10) {
        return 10
    } else if (a + c === a + b - 10 || b + c === a + b - 10) {
        return 5
    }
    return 0
}

function shareDigit(a, b) {
    return (a % 10 === b % 10 || a % 10 === Math.floor(b / 10)) || (Math.floor(a / 10) === b % 10 || Math.floor(a / 10) === Math.floor(b / 10))
}

function sumLimit(a, b) {
    let sum = a + b
    return String(sum).length > String(a).length ? a : sum
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

// could be wrong 
function makeBricks(small, big, goal) {
    return (small + (big * 5)) >= goal

}

function loneSum(a, b, c) {
    let sum = 0
    if (a !== b && a !== c) sum += a
    if (b !== a && b !== c) sum += b
    if (c !== a && c !== b) sum += c

    return sum
}

function luckySum(a, b, c) {
    let sum = 0
    if (a === 13) return sum
    if (b === 13) return sum += a
    if (c === 13) return sum += a + b
    return a + b + c
}


function noTeenSum(a, b, c) {
    return fixTeen(a) + fixTeen(b) + fixTeen(c)
}

const fixTeen = (n) => {
    if ((n >= 13 && n <= 19) && (n !== 15 && n !== 15)) {
        return 0
    }
    return n
}

// function roundSum(a, b, c){
//         return round10(a) + round10(b) + round10(c) 
// }

// const round10 = (n) => {
//     if(String(n).length === 2 ){
//         if (n % 10 >= 5){
//             if (n < 20 ) return 20
//             else if(n <30) return 30

//         }

//         if(n % 10 < 5){
//             if (n < 15) return 10
//             else if(n < 25) return 20

//         }
//     }
//     if(String(n).length === 1){
//         if (n < 5) return 0
//         else if(n >= 5) return 10

//     }


// }
// my code above 
function roundSum(a, b, c) {
    return round10(a) + round10(b) + round10(c)
}

function round10(n) {
    let rem = n % 10
    return rem > 5 ? (n - rem) + 10 : n - rem
}

// the question is worded disgustingly 
function closeFar(a, b, c) {
    let isBclose = Math.abs(a - b) <= 1
    let isCclose = Math.abs(a - c) <= 1

    let isBfar = Math.abs(b - c) >= 2
    let isCfar = Math.abs(c - b) >= 2

    return (isBclose && isCfar) || (isCclose && isBfar)
}

function blackjack(a, b) {
    if (a > 21) {
        a = 0
    }
    if (b > 21) {
        b = 0
    }
    return Math.max(a, b)
}

function evenlySpaced(a, b, c) {
    let arr = [a, b, c].sort((x, y) => x - y)
    return arr[2] - arr[1] === arr[1] - arr[0]
}

function makeChocolate(small, big, goal) {
    if (big) {
        if (5 <= goal) {
            goal -= 5
            big--
        }
    }
    if (small) {
        if (small >= goal) {
            return goal
        }
    }
    return -1
}
// above is mine only works for test cases below is dynamic 
function makeChocolate(small, big, goal) {
    let BigBarUsed = Math.min(Math.floor(goal / 5), big)
    goal -= BigBarUsed * 5

    if (small >= goal) {
        return goal
    }
    return -1

}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function doubleChar(str) {
    let double = ''
    for (let i of str) {
        double += [i] + [i]
    }
    return double
}

function countHi(str) {
    let cnt = 0
    for (let letter = 0; letter < str.length; letter++) {
        if (str[letter] === 'h' && str[letter + 1] === 'i') {
            cnt++
        }
    }
    return cnt
}

function catDog(str) {
    let catCnt = 0
    let dogCnt = 0
    for (let letter = 0; letter < str.length - 2; letter++) {
        if (str[letter] === 'c' && str[letter + 1] === 'a' && str[letter + 2] === 't') {
            catCnt++
        }
    }
    for (let letter = 0; letter < str.length - 2; letter++) {
        if (str[letter] === 'd' && str[letter + 1] === 'o' && str[letter + 2] === 'g') {
            dogCnt++
        }
    }
    return catCnt === dogCnt
}

function countCode(str) {
    let cnt = 0
    let start = 0

    for (let i = 0; i < str.length; i++) {
        if (/co.e/.test(str.slice(start, i + 4))) {
            start++
            cnt++
        } else {
            start++
        }

    }
    return cnt
}

function endOther(a, b) {
    a = a.toLowerCase()
    b = b.toLowerCase()

    let aLength = a.length
    let bLength = b.length

    if (aLength <= bLength) {
        console.log(b.slice(-aLength), a)
        return b.slice(-aLength) === a
    } else {
        console.log(-bLength, b)
        return a.slice(-bLength) === b
    }

}

function xyzThere(str) {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === 'x' && str[i + 1] === 'y' && str[i + 2] === 'z') {
            if (i === 0 || str[i - 1] !== '.') {
                return true
            }
        }
    }
    return false
}

function bobThere(str) {
    return /b.b/.test(str)
}

function xyBalance(str) {
    let xBalance = true
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') xBalance = false
        if (str[i] === 'y') xBalance = true
    }
    return xBalance
}

function mixString(a, b) {
    let newStr = ''
    let bigger = ''
    let smaller = Math.min(a.length, b.length)
    if (a.length >= b.length) {
        bigger = a
    } else bigger = b
    for (let i = 0; i < smaller; i++) {
        newStr += a[i]
        newStr += b[i]
    }
    return newStr += bigger.slice(smaller)
}

function repeatEnd(str, n) {
    let newStr = ''
    for (let i = 0; i < n; i++) {
        newStr += str.slice(-n)
    }
    return newStr
}


function repeatFront(str, n) {
    newStr = ''
    for (let i = n; i >= 0; i--) {
        newStr += str.slice(0, i)
    }
    return newStr
}

function repeatSeparator(word, sep, count) {
    let newStr = ''
    for (let i = 0; i < count; i++) {
        newStr += word
        newStr += sep

    }
    return newStr.slice(0, -sep.length)

}

function prefixAgain(str, n) {
    let checker = str.slice(0, n)

    for (let i = n; i <= str.length - 1; i++) {
        if (str.slice(i, i + n) === checker) {
            return true
        }
    }
    return false
}

function xyzMiddle(str) {
    let index = str.indexOf('xyz')
    return index !== 1 && index === str.slice(index + 3).length || index + 1 === str.slice(index + 3).length || index === str.slice(index + 3).length + 1
}

//<3
function getSandwich(str) {
    let firstIdx = str.indexOf('bread')
    let lastIdx = str.lastIndexOf('bread')
    if (firstIdx === -1 || firstIdx === lastIdx) {
        return ""
    }

    return str.slice(firstIdx + 5, lastIdx)
}

function sameStarChar(str) {
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '*') {
            if (str[i - 1] === str[i + 1]) {
                return true
            }
        }
    }
    return false
}

function oneTwo(str) {
    let newStr = ''
    let notNeeded = str.length % 3
    let moddedStr = notNeeded !== 0 ? str.slice(0, -notNeeded) : str

    for (let i = 0; i < moddedStr.length; i += 3) {
        newStr += str[i + 1]
        newStr += str[i + 2]
        newStr += str[i]
    }
    return newStr

}

function zipZap(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z' && str[i + 2] === 'p') {
            str = str.replace(str[i + 1], '')
        }
    }
    return str
}
//ew
function starOut(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] !== '*' && str[i + 1] !== '*') newStr += str[i]

    }
    return newStr.replaceAll(/\*/g, '')


}

function plusOut(str, word) {
    let size = word.length

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, size + i) === word) {

            continue
        }
        str = str.replace(str[i], '+')
    }
    return str

}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function countYZ(str) {

    let arr = str.split(' ')
    let cnt = 0
    for (let i of arr) {
        if (i.at(-1).toLowerCase() === 'z' || i.at(-1).toLowerCase() === 'y') cnt++
    }
    return cnt
}

function withoutString(base, remove) {
    let newStr = ''
    for (let i = 0; i < base.length; i++) {
        if (base.slice(i, remove.length + i).toLowerCase() === remove.toLowerCase()) {
            i += remove.length - 1
            continue
        }
        newStr += base[i]

    }
    return newStr
}

function equalIsNot(str) {
    let isCnt = 0
    let notCnt = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'i' && str[i + 1] === 's') isCnt++
        else if (str[i] === 'n' && str[i + 1] === 'o' && str[i + 2] === 't') notCnt++

    }
    return isCnt === notCnt

}

function gHappy(str) {
    let flag = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g') {
            if (i > 0 && str[i - 1] === 'g' || i > str.length && str[i + 1] === 'g') flag = true
            else if (i > 0 && str[i - 1] !== 'g' || i > str.length && str[i + 1] !== 'g') flag = false

        }
    }
    return flag

}

function countTriple(str) {
    let cnt = 0
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) cnt++

    }
    return cnt
}

function sumDigits(str) {
    let sum = 0
    for (let i of str) {
        if (/[0-9]/.test(i)) sum += Number(i)
    }
    return sum
}

function sameEnds(str) {

    let half = str.length % 2 === 0 ? str.length / 2 : Math.floor(str.length / 2)
    while (half !== 0) {
        if ((str.slice(0, half) === str.slice(-half)) && (str[half - 1] === str[str.length - half] && (half === str.length / 2 || half === Math.floor(str.length / 2)))) return str[0]
        else if (str.slice(0, half) === str.slice(-half)) return str.slice(0, half)
        else half -= 1
    }
    return ''

}

function maxBlock(str) {
    let left = 0
    let right = 1
    let cnt = 0
    if (str.length === 0) return 0
    if (str.length === 1) return 1
    while (right !== str.length) {
        if (str[left] === str[right]) {

            cnt = Math.max(cnt, right + 1 - left)
            right++

        } else if (str[left] !== str[right]) {
            cnt = Math.max(cnt, right - left)
            left = right
            right++
        }

    }
    return cnt
}

function sumNumbers(str) {
    let total = 0
    let arr = str.split(/[a-z\s]/i)
    for (let i of arr) {
        if (/[0-9]/.test(i)) total += Number(i)
    }
    return total
}

function notReplace(str) {
    let empty = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'i' && str[i + 1] === 's') {
            if (!(/[a-z]/i.test(str[i - 1]) && /[a-z]/i.test(str[i + 2]))) {
                empty += 'is not'
            }
        } else {
            empty += str[i]
        }
    }
    return empty

}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

//OPTIMIZE 
function maxSpan(nums) {
    let max = 1
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                max = Math.max(max, j - i + 1)
            }
        }
    }
    return max

}
//maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function fix34(nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {

    }
    return nums
}





function fix34(nums) {
    // Pointer to search for a 4 that is not following a 3
    let j = 0;
    // Loop through each element to process every 3
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 3 && nums[i + 1] !== 4) {
            // Find the next 4 that is not immediately following a 3
            while (nums[j] !== 4 || (j > 0 && nums[j - 1] === 3)) {
                j++;
            }
            // Swap the element after the 3 with the misplaced 4
            let temp = nums[i + 1];
            nums[i + 1] = nums[j];
            nums[j] = temp;
        }
    }
    return nums;
}

function fix45(nums) {
    const fiveArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 5 && nums[i - 1] !== 4) {
            fiveArray.push(i);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 4 && nums[i + 1] !== 5) {
            const fiveIndex = fiveArray.shift();
            [nums[i + 1], nums[fiveIndex]] = [nums[fiveIndex], nums[i + 1]]; //array destructuring same as making a temp var and adn switching there 
        }
    }

    return nums;
}




/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/



function scoreIncreasing(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) return false
    }
    return true
}

function scores100(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 100 && nums[i + 1] === 100) return true
    }
    return false
}


function replaceFirstLast(str) {
    if (str) return str[str.length - 1] + str.slice(1, -1) + str[0]
    return ''
}
console.log(replaceFirstLast('Hello'))


function swapFirstLastWord(str) {

    const arr = str.split(' ')
    if (arr.length < 2) return ''
    let first = arr[0]
    let last = arr[arr.length - 1]
    arr[0] = last
    arr[arr.length - 1] = first
    return arr.join(' ')

}

console.log(swapFirstLastWord('I'))

function factorial(num) {
    let n = 1

    for (let i = num; i > 1; i--) n *= i
    return n

}
console.log(factorial(5))


function removeExtraSpace(str) {
    str = str.trim()
    return str.replace(/\s+/g, ' ')
}
console.log(removeExtraSpace('      hello      worllld  '))

function firsDuplicate(arrs) {
    let seen = []
    let dup = []

    for (let i of arrs) {
        if (seen.includes(i)) dup.push(i)
        else seen.push(i)
    }
    for (let i of arrs) {
        if (dup.includes(i)) return i

    }

}
console.log(firsDuplicate([5, 7, 7, 0, 5, 10]))
//ZIZI
function getDuplicates(arr) {
    const seen = []
    const dup = []
    for (let i of arr) {
        if (seen.includes(i) && !dup.includes(i)) dup.push(i)
        else seen.push(i)
    }
    return dup
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]))


function reverseStingWords(str) {
    const arr = str.split(' ')

    return arr.map((x) => x.split('').reverse().join('')).join(' ')

}

console.log(reverseStingWords('I like JavaScript'))

function add(arr1, arr2) {
    const res = []
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i >= arr1.length) res.push(arr2[i])
        else if (i >= arr2.length) res.push(arr1[i])
        else res.push(arr1[i] + arr2[i])
    }
    return res
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))

function fizzBuzz(num) {
    const arr = []

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz')
        else if (i % 3 === 0) arr.push('Fizz')
        else if (i % 5 === 0) arr.push('Buzz')
        else arr.push(i)
    }
    return arr


}
console.log(fizzBuzz(2))

function isPlaindrome(str) {
    let r = str.length - 1
    let l = 0

    while (l <= r) {
        if (str[l].toLowerCase() === str[r].toLowerCase()) {
            l += 1
            r -= 1
        } else return false

    }
    return true
}

console.log(isPlaindrome('Hello'))
console.log(isPlaindrome('Kayak'))

function removeDuplicates(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))

function isPrime(num) {
    if (num === 2) return true
    if (num % 2 === 0 || num < 2) return false

    for (let i = 3; i < Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(2))
console.log(isPrime(29))


function arrFactorial(arr) {

    return arr.map((x) => {
        let factorial = 1
        for (let i = x; i > 1; i--) {
            factorial *= i
        }
        return factorial
    })
}

console.log(arrFactorial([]))


function findBiggestNumber(str) {

    let big = 0
    let bigstr = ''

    for (let i = 0; i <= str.length; i++) {
        if (/[0-9]/.test(str[i])) bigstr += str[i]
        else {
            big = Math.max(big, Number(bigstr))
            bigstr = ''
        }
    }
    return big
}

console.log(findBiggestNumber('abcacb'))
console.log(findBiggestNumber('525'))
console.log(findBiggestNumber('3 for 10 bucks'))
console.log(findBiggestNumber('ab110c045d'))


function findSumNumbers(str) {
    let total = 0
    bigstr = ''
    for (let i = 0; i <= str.length; i++) {
        if (/[0-9]/.test(str[i])) bigstr += str[i]

        else {
            total += Number(bigstr)
            bigstr = ''

        }
    }
    return total
}
console.log(findSumNumbers('3 for 10 dollars'))


const assert = require('assert')
const { hash } = require('crypto')
function isPowerOf3(num) {

    if (num < 1) return false
    while (num % 3 === 0) {
        num /= 3
    }
    return num === 1
}
console.log(assert.strictEqual(isPowerOf3(12), true))


console.log(isPowerOf3(12)) //f
console.log(isPowerOf3(2)) // f
console.log(isPowerOf3(3)) // t
console.log(isPowerOf3(27)) // t
console.log(isPowerOf3(100)) // f
console.log(isPowerOf3(81)) // t
console.log(isPowerOf3(9)) // t


function fibonacciSeries1(num) {
    const res = []


    for (let i = 0; i < num; i++) {
        if (i === 0) res.push(0)
        else if (i === 1) res.push(1)
        else res.push(res[i - 1] + res[i - 2])
    }


    return res

}

console.log(fibonacciSeries1(3))
console.log(fibonacciSeries1(5))
console.log(fibonacciSeries1(7))

function fibonacciSeries2(num) {
    const res = []

    for (let i = 0; i < num; i++) {
        if (i === 0) res.push(0)
        else if (i === 1) res.push(1)
        else res.push(res[i - 1] + res[i - 2])
    }
    return res.at(-1)
}

console.log(fibonacciSeries2(8))

//ZIZI
function findUniques(arr1, arr2) {
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    const res = []
    for (let i of set1) {
        if (!set2.has(i)) res.push(i)
    }
    for (let i of set2) {
        if (!set1.has(i)) res.push(i)
    }
    return res
}

console.log(findUniques([], [1, 2, 3, 2]))
//ZIZI
function reverseNumbers(num) {
    let rev = 0

    while (num > 0) {
        last = num % 10
        rev = rev * 10 + last
        num = Math.floor(num / 10)
    }
    return rev

}
console.log(reverseNumbers(371))

console.log(37 % 10)

function isArmStrong(num) {
    let res = 0
    let strNum = String(num)
    const arr = strNum.split('')
    let power = arr.length

    for (let i of arr) {
        res += Number(i) ** power
    }
    console.log(res)
    return res === num

}

console.log(isArmStrong(1634))

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()

    let str1Count = {}

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in str1Count) str1Count[str1[i]] += 1
        else str1Count[str1[i]] = 1

    }
    for (let i of str2) {

        if (i in str1Count && str1Count[i] !== 0) str1Count[i] -= 1
        else return false
    }
    return true

}

console.log(isAnagram("Apple", "Peach"))
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("astronomer", "moon starer"))
console.log(isAnagram("CINEMA", "iceman"))
console.log(isAnagram("123", "1234"))


function countPalindrome(str) {
    let cnt = 0
    str = str.toLowerCase()
    let strArr = str.split(' ')

    const mappy = strArr.map((x) => x.split('').reverse().join(''))

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === mappy[i]) cnt++
    }
    return cnt



}

console.log(countPalindrome("Mom and Dad"))


function canFormString(s1, s2) {
    s1 = s1.toLowerCase().replace(/\s+/g, '')
    s2 = s2.toLowerCase().replace(/\s+/g, '')
    let hashy = {}

    for (let i of s1) {
        if (i in hashy) hashy[i] += 1
        else hashy[i] = 1
    }

    for (let i of s2) {
        if (i in hashy && hashy[i] !== 0) hashy[i] -= 1
        else return false
    }
    return true

}
console.log(canFormString("Hello", "Hi"))
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on"))
console.log(canFormString("12", "123"))

//ZIZI
function countOccurrence(s1, s2) {
    let min = Infinity
    s1 = s1.toLowerCase().replace(/\s/g, '')
    s2 = s2.toLowerCase().replace(/\s/g, '')
    hashy1 = {}
   

    for (let i of s1){
        if (i in hashy1) hashy1[i] +=1
        else hashy1[i] = 1
    }
    

    for(let i of s2){
        if(hashy1[i] === undefined) return 0
         min = Math.min(min, hashy1[i])
    }

    return min


}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))//  -> 1 -> 0 
console.log(countOccurrence("Can I can a can", "anc"))// -> 3 
console.log(countOccurrence("Hello", "l"))//   -> 2 
console.log(countOccurrence("IT conversations", "IT"))  





function fd(arr){
    let seen = []
    let dup = []

    for(let i of arr){
        if (seen.includes(i)) dup.push(i)
        else seen.push(i)
    }

    for (let i of arr){
        if (dup.includes(i)) return i
    }
    return -1
 
}


console.log(fd([ 3, 7, 10, 0, 3, 10 ]))    
console.log(fd([ 5, 7, 7, 0, 5, 10 ]))   
console.log(fd([ 5, '5', 3, 7, 4 ]) )   
console.log(fd([ 123, 'abc', '123', 3, 'abc' ]) ) 
console.log(fd([ 1, 2, 3]))    
console.log(fd([ 'foo', 'abc', '123', 'bar' ])) 

function gd (nums){
    let dup = new Set()
    let seen = []

    for(let i of nums){
        if (seen.includes(i)) dup.add(i)
        else seen.push(i)
    }

    return [...new Set(dup)]
}


console.log(gd([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))    
console.log(gd([ 1, 2, 5, 0, 7 ]))    
console.log(gd(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))   
console.log(gd([ 'foo', '12' , 12, 'bar', 'a' ]))  


function revW (str){
    str = str.trim().replace(/\s+/g, ' ')
    if (!str) return ''
    const strArr = str.split(' ')

    return strArr.map((x) => x.split('').reverse().join('')).join(' ')
    

}



function countP(str){
    let cnt = 0
    if(!str) return 0
    str = str.toLowerCase().trim()
    const strArr = str.split(' ')
    const rev = strArr.map((x) => x.split('').reverse().join(''))

    for(let i = 0; i < strArr.length; i ++){
        if(strArr[i] === rev[i]) cnt += 1
    }
    return cnt 

}
console.log(countP("Mom and Dad"))    



function add2 (arr1, arr2){
    const resArr =[]
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++){
        if (i >= arr1.length) resArr.push(arr2[i])
        else if (i >= arr2.length) resArr.push(arr1[i])
        else resArr.push(arr1[i] + arr2[i])
    }
    return resArr
}

console.log(add2([3, 0, 0, 7, 5, 10], [6, 3, 2]))


const addTwo = (arr1, arr2) => {
    newArr = []
    let bigger = Math.max(arr1.length, arr2.length)
    let smaller = Math.min(arr1.length, arr2.length)

    if(arr1.length > arr2.length){
        bigger = arr1
    }else bigger = arr2

    console.log(smaller, bigger)

    for (let i = 0; i < bigger; i++) {
        if (smaller[i]) {
            newArr.push(bigger[i] + smaller[i])
        } else {
            newArr.push(bigger[i])
        }
    }
    return newArr
}
console.log(addTwo([6, 3, 2],[3, 0, 0, 7, 5, 10]))


function isPlai(str){
    str= str.toLowerCase()
    let left = 0
    let right = str.length -1
    while(left <= right){
        if(str[left] === str[right]){
            left += 1
            right -= 1
        }else return false
    }
    return true
}

console.log(isPlai("Hello"))//   -> true 



function removeDD(arr){

    const removed = []

    for( let i of arr){
        if(removed.includes(i)) continue
        else removed.push(i)
    }

    return removed
}

console.log(removeDD([10, 20, 35, 20, 35, 60, 70, 60]))


function iP(num){
    if (num === 2) return true
    if(num % 2 === 0 || num < 2) return false

    for(let i = 3; i < Math.sqrt(num); i +=2){
        if (num % i === 0) return false
    }
    return true 

}

console.log(iP(54))



function sumNum(str){
    let total = 0
    let strNum =''

    for(let i = 0; i <= str.length; i ++){
        if (/[0-9]/.test(str[i])) strNum += str[i]
        else{
            total += Number(strNum)
            strNum = ''
        }
    }
    return total
}

console.log(sumNum('3 for 10 dollars'))

function isPower3(num){

    while(num >= 1){
       if(num === 1) return true
       num = num /3

      
    }
    return false
}

console.log(isPower3(1))
console.log(isPower3(2))
console.log(isPower3(3))
console.log(isPower3(27))
console.log(isPower3(100))
console.log(isPower3(81))
console.log(isPower3(9))

function fibby(num){
    const fibb = []
    for(let i = 0; i < num; i ++){
        
        if (i === 0) fibb.push(0)
        else if (i === 1) fibb.push(1)
        else fibb.push(fibb[i -1] + fibb[i -2])

    }
    return fibb
}
console.log(fibby(20))

function fU(arr1, arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    let res = []

    for(let i of set1){
        if (! set2.has(i) ) res.push(i)
    }

    for(let i of set2){
        if (! set1.has(i)) res.push(i)
    }
    return res
}

console.log(fU([1, 2, 3, 4], [3, 4, 5, 5]))


function revN(num){
    let rev = 0 

    while (num > 0){
        let last = num % 10
        rev = rev * 10 + last
        num = Math.floor(num / 10)
    }
    return rev
}

console.log(revN(371))

function countOC(str1,str2){
    str1 = str1.toLowerCase().replace(/\s/g, '')
    str2 = str2.toLowerCase().replace(/\s/g, '')

    let str1C = {}
    let str2C = {}
    let min = Infinity

    for(let i of str1){
        if(i in str1C) str1C[i] +=1
        else str1C[i] = 1
    }

      for(let i of str2){
        if(i in str2C) str2C[i] +=1
        else str2C[i] = 1
    }

    for(let i of str2){
        if(str1C[i] === undefined) return 0
        min = Math.min(min, str1C[i])
    }

    return min 

}

console.log(countOC('Can I can a can', "anc"))

function nthChars(str, num){
    let resStr =''

    for(let i = num-1; i < str.length; i += num){
        resStr += str[i]
    }
    return resStr
}

console.log(nthChars("Java", 2)) 
console.log(nthChars("JavaScript", 5) )
console.log(nthChars("Java", 3) ) 
console.log(nthChars("Hi", 4))//  -> "aa" -> "St" -> "v" -> "" 
console.log(nthChars("0123456789", 2))// -> "13579"  


function longestWord(str){
    let max = 0
    let maxWord =''
    const strArr = str.trim().split(' ')
    if(!str) return ''

    for(let i of strArr){
        if(i.length > max){
            max = Math.max(max, i.length)
            maxWord = i
        }

    }
    return maxWord
    
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))  
console.log(longestWord("This is a sample string for testing"))

function median(arr1, arr2){
    const fullArr = [...arr1, ...arr2].sort((a,b) => a - b)
    if(fullArr.length % 2 !== 0){
        return fullArr[Math.floor(fullArr.length / 2)]
    }else{
        return (fullArr[fullArr.length / 2] + fullArr[fullArr.length / 2] -1 ) / 2
    }
    
}

console.log(median([1, 3], [2])  ) 
console.log(median([1, 2], [3, 4]) )  
console.log(median([4], [3]) )  
console.log(median([4], [])  )  
console.log(median([0], [0,1]) )




function missingDigit(str){
    const strArr = str.split(' ')
    let result  = Number(strArr.at(-1))
    let operation = strArr[1]
    let xVal 
    let secondVal
    let xIndex 

    if(strArr[0].includes('x')){
        xIndex=strArr[0].indexOf('x')
        xVal = strArr[0]
        secondVal = Number(strArr[2])
    }else{
        xIndex=strArr[2].indexOf('x')
        xVal = strArr[2]
        secondVal = Number(strArr[0])
    }

    if(operation === '+'){
        
        let diff = result - secondVal
            
        if(xIndex === 1){
            return diff % 10
        }else returnMath.floor((diff / 10) )

    }else if (operation === '-'){
        
        let diff = result + secondVal
            
        if(xIndex === 1){ 
            return diff % 10
        }else return Math.floor((diff / 10) )

    }else if(operation === '*'){
        let diff = result / secondVal
        if(xIndex === 1){ 
            return diff % 10
        }else return Math.floor((diff / 10))

    }else{
        let diff = result * secondVal

        if(xIndex === 1){ 
            return diff % 10
        }else return Math.floor((diff / 10) )
    }
}

console.log(missingDigit("3x + 12 = 46")) // Output: 4
console.log(missingDigit("4x - 15 = 25")) // Output: 0
console.log(missingDigit("9 * x3 = 837")) // Output: 9
console.log(missingDigit("5x / 5 = 11"))  // Output: 5
console.log(missingDigit("2 + 4x = 51"))  // Output: 9


function mostRepeated(arr){
    const hashy = {}
    let maxNum =0
    let val 

    for(let i = 0; i < arr.length; i ++){
        if (arr[i] in hashy) hashy[arr[i]] +=1
        else hashy[arr[i]] =1
    }
    console.log(hashy)

    for(let key in hashy){
        if( hashy[key] > maxNum){
            val = key
            maxNum = Math.max(maxNum, hashy[key])

        }
        
        
    }
    return val
   
}
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]))     
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))    
console.log(mostRepeated(["TechGlobal"]))         



function canFormString(str1, str2){
    const hashy1 = {}
    const hashy2 = {}
    str1 = str1.toLowerCase().trim().replace(/\s/g, '')
    str2 = str2.toLowerCase().trim().replace(/\s/g, '')

    for(let i of str1){
        if (i in hashy1) hashy1[i] +=1
        else hashy1[i] =1
    }

     for(let i of str2){
        if (i in hashy2) hashy2[i] +=1
        else hashy2[i] =1
    }

   

    for(let key in hashy2){
     
        if (hashy1[key] < hashy2[key]){
            return false
        }else if( hashy1[key]=== undefined) return false
    }
    return true

}

console.log(canFormString("Hello", "Hi")  )  
console.log(canFormString("programming", "gaming") )  
console.log(canFormString("halogen", "hello")  )  
console.log(canFormString("CONVERSATION", "voices rant on"))





function median(arr1, arr2){
    const sortedArr = [...arr1, ...arr2].sort((a,b) => a - b)

    if(sortedArr.length % 2 === 0){
        return (sortedArr[sortedArr.length / 2] + sortedArr[(sortedArr.length / 2) -1]) /2
    }else return sortedArr[Math.floor(sortedArr.length /2)]
}


console.log(median([1, 3], [2]))   
console.log(median([1, 2], [3, 4]))   
console.log(median([4], [3]))   
console.log(median([4], []))   
console.log(median([0], [0,1]))



function reverseString(str){
    
    const arr = str.split(' ').reverse()

    return arr.map((x) => x.split('').reverse().join('')).join(' ')
}

console.log(reverseString("Hello World")) 
console.log(reverseString("TechGlobal"))  
console.log(reverseString("Basketball is fun"))
console.log(reverseString(""))  
console.log(reverseString("Apples 456")) 

function reverseNumber(num){
    let rev = 0

    while (num > 0){

        rev = (rev * 10 ) + (num % 10) 
        num = Math.floor(num / 10)
    }
    return rev
}

console.log(reverseNumber(371))

function reverseStringWords(str){
    const arr = str.split(' ')

    return arr.map((x) => x.split('').reverse().join('')).join(' ')
}

console.log(reverseStringWords("Hello World"))    
console.log(reverseStringWords("I like JavaScript"))   
console.log(reverseStringWords("Hello"))    
console.log(reverseStringWords(""))      
console.log(reverseStringWords(" "))  


function reverseSentence(str){
    const revStr = str.split(' ').reverse().join(' ')
    const isUpperIdx = []
    let  STR = ''
    if(revArr.length < 2 ) return 'There is not enough words!'

    for(let i = 0; i < str.length; i ++){
        if (str[i].toUpperCase() === str[i] && str[i] !== ' ') isUpperIdx.push(i)
    }

    for(let i = 0; i < revStr.length; i++){
        if (isUpperIdx.includes(i)){
            STR += revStr[i].toUpperCase()
        
        }else STR += revStr[i].toLowerCase()
    }
    return STR


}
console.log(reverseSentence("A b c D e")  )



function isPalindrome(str){
    str = str.toLowerCase()
    let left = 0
    let right = str.length - 1

    while (left <= right){
        if (str[left] !== str[right]) return false
        right --
        left ++
    }
    return true 
}

console.log(isPalindrome("Hello"))    
console.log(isPalindrome("Kayak"))    
console.log(isPalindrome("abba"))   
console.log(isPalindrome("ab  a"))//    -> false -> true -> true -> false 
console.log(isPalindrome("123454321"))//   -> true 
console.log(isPalindrome("A"))   
console.log(isPalindrome(""))

function countPrimes(nums){
    let cnt = 0

    nums.map((x) =>{
        if (x === 2 ) cnt +=1
        if ( x % 2 === 0 || x <= 1 ) return false

        for(let i = 3; i < Math.sqrt(x); i++){
            if (x % i === 0 ) return false
        }cnt += 1 
    })
    return cnt 
    
}


console.log(countPrimes([-10, -3, 0, 1])) 
console.log(countPrimes([7, 4, 11, 23, 17])) 
console.log(countPrimes([41, 53, 19, 47, 67]))
console.log(countPrimes([0]))  
console.log(countPrimes([2, 2, 2, 2, 2, 2]))
console.log(countPrimes([29,31,37]))


function countOccurrencesOfCharacters(str){
    
    let cnt = 1
    let resStr = ''

    for(let i = 0; i < str.length; i++){
        
        if(str[i] === str[i + 1]){
            cnt += 1 
        }else{
            resStr += cnt + str[i]
            cnt = 1
        }     
        
    }
    

    return resStr
}

console.log(countOccurrencesOfCharacters("abbcca"))// -> "1a2b2c1a" 


function fibonacciSeries(num){
    const res = []
    for(let i = 0; i < num; i ++){
        if (i === 0) res.push(0)
        else if (i === 1) res.push(1)
        else res.push(res[i - 1] + res[i - 2])

    }
    return res
}

 
console.log(fibonacciSeries(3))  
console.log(fibonacciSeries(5)) 
console.log(fibonacciSeries(7))  
console.log(fibonacciSeries(8)) 



function mostRepeated(nums){
    const charCount = {}
    let val 
    let maxCnt = 0

    for(let i of nums){
        if (i in charCount) charCount[i] += 1
        else charCount[i] = 1
    }

    for(let key in charCount){
        if(charCount[key] > maxCnt){
            val = key
            maxCnt = Math.max(maxCnt, charCount[key])
        }
    }
    return val
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23, 23, 23]))


function biggestNumber(str){

    let maxStr = ''
    let sumNum = 0


    for(let i = 0; i <= str.length; i ++){

        if(/[0-9]/.test(str[i])){
            maxStr += str[i]
        }else{
            sumNum += Number(maxStr)
            //maxNum = Math.max(maxNum, Number(maxStr))
            maxStr = ''
        }

    }
    return sumNum
}


console.log(biggestNumber("abc$"))  
console.log(biggestNumber("a1b4c  6#"))  
console.log(biggestNumber("ab110c045d")) 
console.log(biggestNumber("525"))  
console.log(biggestNumber("3 for 10 dollars"))// -> 0 -> 6 -> 110 -> 52



const secondMax = (nums) =>{ return sortedArr =  [...new Set(nums)].sort((a,b) => a-b).at(-2)}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))//    -> 23 


const secondMin = (nums) => {return [...new Set(nums)].sort((a,b) => a-b).at(1) }
console.log(secondMin([3, 4, 5, 6]))// 4



function countWords(str){
    return str.trim().replace(/\s+/g, ' ').split(' ').length
  
}

console.log(countWords("Cypress is a UI          automation tool.    "))//          	-> 6 


function middle(x, y, z){
    return [x, y, z].sort((a, b) => a - b).at(1)
}

console.log(middle(5, 3, 5))


function firstDuplicate(nums){
    let seen = new Set()
    let duplicate = new Set()

    for(let i of nums){
        if (seen.has(i) ) duplicate.add(i)
        else seen.add(i)
    }
    for (let i of seen){
        if (duplicate.has(i)) return i
    }return -1
   
}

console.log(firstDuplicate([ 5,  7, 0,  10 ]))


function getDuplicates(arr){
    let seen = new Set()
    let duplicate = new Set()

    for(let i of arr){
        if (seen.has(i)) duplicate.add(i)
        else seen.add(i)
    }

    return [...duplicate]
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))    
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))     
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]))  
console.log(getDuplicates([ 'foo', '12', 12, 'bar', 'a' ]))//    -> [ 0, -7 ] -> [ ] -> [ 'foo', 'a’ ] 



function removeDuplicates(nums){
    return [...new Set(nums)]
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))    
console.log(removeDuplicates([1, 2, 5, 2, 3]))      
console.log(removeDuplicates([0, -1, -2, -2, -1]))   



function add(arr1, arr2){
    const res = []

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++){
        if (i >= arr1.length) res.push(arr2[i])
        else if ( i >= arr2.length) res.push(arr1[i])
        else res.push(arr1[i] + arr2[i] )
    }
    return res
}
console.log( add([3, 0, 0, 7, 5, 10], [6, 3, 2]) )  //                        -> [9, 3, 2, 7, 5, 10]



function getCommons(arr1, arr2){
    const dup = []

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++){

        if (i >= arr1.length){
            if (arr1.includes(arr2[i]) && !dup.includes(arr2[i])) dup.push(arr2[i])
            }
        else if (i >= arr2.length){
            if (arr2.includes(arr1[i]) && !dup.includes(arr1[i])) dup.push(arr1[i])
            }
        else {
            if (arr1.includes(arr2[i]) && !dup.includes(arr2[i])) dup.push(arr2[i])
        }
    }
    return dup

}

function getCommons(arr1, arr2){
    const arr1S = new Set(arr1)
    const dup = new Set()

    for(let i of arr2){
        if (arr1S.has(i)) dup.add(i)
    }
    return [...dup]
}

console.log(getCommons([], ["abc", "xyz", "123"]))//                                              -> []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]))//   	-> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"]) )//          	-> ["C#"]
console.log(getCommons( ["a", "b", "c"], ["a", "b", "c"]))//                                  -> ["a", "b", "c"]
console.log(getCommons( ["a", "b", "c", "a", "b", "c"], ["a", "b", "c", "a", "b", "c"]))//     -> ["a", "b", "c"]


function categorizeCharacters(str){
    str = str.trim().replace(/\s/g, '')
    const res = ['', '', '']

    for(let i of str){
        if (/[0-9]/.test(i)) res[1] += i
        else if (/[a-zA-Z]/.test(i)) res[0] += i
        else res[2] += i
    }
    return res
}


console.log(categorizeCharacters("1234"))//      	-> [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%"))//       -> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"))//       -> [ 'abc', '123', '$%%' ]
console.log(categorizeCharacters(""))//                -> [ '' , '', '' ] 



function isPowerOf3(num){
    
    while(num >= 1){
        if (num === 1) return true 
        
        num = num / 3
    }
    return false
}

console.log(isPowerOf3(1))//         	-> true
console.log(isPowerOf3(2))//         	-> false
console.log(isPowerOf3(3))//         	-> true
console.log(isPowerOf3(27))//       	-> true
console.log(isPowerOf3(100))//     	-> false
console.log(isPowerOf3(81))//       	-> true
console.log(isPowerOf3(9)) //        	-> true



function splitString(str, num){
    if (str.length % num !== 0) return ''

    return str.slice(0, num) + ' ' + str.slice(num)
    
}



console.log(splitString("JavaScript", 5))// 	-> "JavaS cript"
console.log(splitString("Java", 2))//          -> "Ja va"
console.log(splitString("Automation", 3))//	-> ""
console.log(splitString("Hello", 6))//         -> ""
console.log(splitString("12", 1))//            -> "1 2"


function isPerfectSquare(num){

    return Math.sqrt(num) * Math.sqrt(num) === num

}

console.log(isPerfectSquare(25))//   -> true
console.log(isPerfectSquare(24))//   -> false
console.log(isPerfectSquare(0))//	  -> true
console.log(isPerfectSquare(-1))//   -> false
console.log(isPerfectSquare(144))//  -> true


function nthChars(str, num){
    let res = ''

    for( let i = num -1; i < str.length; i += num){
        res += str[i]
    }
    return res
}

console.log(nthChars("Java", 2))//            	-> "aa"
console.log(nthChars("JavaScript", 5))// 	 -> "St"
console.log(nthChars("Java", 3))//          -> "v"
console.log(nthChars("Hi", 4))//              -> ""
console.log(nthChars("0123456789", 2))//		-> "13579" 



// Write your solution below
function longestWord (str){
  str = str.trim().replace(/\s/g, ' ')
  if(!str) return ''
  const arr = str.split(' ')
  let maxCnt = 0
  let maxWord = ''

  for(let i of arr){
    if(i.length > maxCnt){
      maxCnt = Math.max(maxCnt, i.length)
      maxWord = i
    }
  }
  return maxWord
  
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))//    	-> "jumped"
console.log(longestWord("This is a sample string for testing"))//              ->"testing" 
console.log(longestWord("One two ten"))//                                      -> "One"
console.log(longestWord(""))//                                                 -> ""
console.log(longestWord("      "))        



/*
Write a function named splitString() which takes a string and a number arguments and returns the string back 
split by the given number. NOTE: Return an empty string if the string is shorter than the splitting number or 
the string length is not divisible by the given number.
*/


function splitString(str, num){

    if (str.length < num || str.length % num !== 0) return ''
    return str.slice(0, num) + ' ' + str.slice(num)

}


console.log(splitString("JavaScript", 5))//  	-> "JavaS cript"
console.log(splitString("Java", 2))//         -> "Ja va"
console.log(splitString("Automation", 3))//	-> ""
console.log(splitString("Hello", 6))//        -> ""
console.log(splitString("12", 1))//            -> "1 2"

//growth opp in company ?