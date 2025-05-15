console.log(`\n--------------------Task One-----------------------\n`);
function countVC(str){
    const hashy = { vowels: 0, consonants: 0}

    for (let i of str){
        if (/[aeiou]/i.test(i)) hashy.vowels +=1
        else if (/[bcdfghjklmnpqrstvwxyz]/i.test(i)) hashy.consonants += 1
    }
    return hashy

}


console.log(countVC("Hello")) // {vowels: 2, consonants: 3}
console.log(countVC("Programming")) //{vowels: 3, consonants: 8}
console.log(countVC("123AbC")) //{vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")) //{vowels: 0, consonants: 3}
console.log(countVC("")) // 	-> {vowels: 0, consonants: 0}

console.log(`\n--------------------Task Two-----------------------\n`);
function countChars(str) {
    const hashy = {}

    for (let i of str) {
        if (/[a-z]/i.test(i)) {
            if (hashy.letter >= 1) hashy.letter += 1
            else hashy.letter = 1
        } else if (/[0-9]/i.test(i)) {
            if (hashy.number >= 1) hashy.number += 1
            else hashy.number = 1
        } else if (/\s/.test(i)) continue
        else {
            if (hashy.specials >= 1) hashy.specials += 1
            else hashy.specials = 1
        }
    }
    return hashy
}

console.log(countChars("Hello")) // 	-> {letters: 5}
console.log(countChars("Programming 123")) //	-> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")) //	-> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")) //	-> {numbers: 10}
console.log(countChars("    ")) //-> {}
console.log(countChars(""))//	-> {}


console.log(`\n--------------------Task Three-----------------------\n`);
function maxOccurrences(str){
    let max = 0
    let letter = ''
    str = str.replace(/\s/g, '')
    let hashy = {}

   for(let i of str){
    if (i in hashy) hashy[i] +=1
    else hashy[i] = 1
   }

   for (let i in hashy){
    if (hashy[i] > max){
        max = hashy[i]
        letter = i
    }
   }

   return letter

}


console.log(maxOccurrences("Hello")) // 	-> "l"
console.log(maxOccurrences("Occurrences")) // 	-> "c"
console.log(maxOccurrences("    ab    ")) //	-> "al"
console.log(maxOccurrences("12   3   21")) //	-> "1"
console.log(maxOccurrences("    ")) //	-> ""
console.log(maxOccurrences("")) //	-> ""

console.log(`\n--------------------Task Four-----------------------\n`);
function starOut(str){
    str.trim()
    let arr = str.split('')

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === '*' && arr[i + 1] === '*'){
            arr[i - 1] = ''
            arr[i + 2] = ''
        }
        else if(arr[i] === '*' && arr[i + 1] !== '*'){
            arr[i - 1] = ''
            arr[i + 1] = ''
        }
    }
    return arr.join('').replace(/\*/g, '')
}

console.log(starOut("ab*cd")) // 	-> "ad"
console.log(starOut("ab**cd")) // 	-> "ad"
console.log(starOut("xm*sm*sy")) // 	-> "xy"
console.log(starOut("abc")) //​	-> "abc"
console.log(starOut("***")) //	-> ""
console.log(starOut("   ")) //-> "   "
console.log(starOut(""))//	-> ""



console.log(`\n--------------------Task Five-----------------------\n`);        

function romanTolnt(str){
    const arr = str.split('')
    let total = 0
    const hashy = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    for(let i = 0; i < arr.length; i ++){
        if(hashy[arr[i]] < hashy[arr[i+1]]){
            total += hashy[arr[i+1]] - hashy[arr[i]]
            i++
        
        }else total += hashy[arr[i]]
    }
    return total
}



console.log(romanTolnt("I")) // 1
console.log(romanTolnt("IV")) // 4
console.log(romanTolnt("CXII")) //112
console.log(romanTolnt("MMM")) //3000
console.log(romanTolnt("MMMDCCCLXXXVIII")) //-> 3888
console.log(romanTolnt("MDCLXVI")) //1666

