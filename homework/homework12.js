console.log(`\n--------------------Task One-----------------------\n`);

function makeNegative(num){
    return num <= 0 ?  num: num - (num * 2)
    
}

console.log(makeNegative(10))   //      -> -10
console.log(makeNegative( -7))  //     	-> -7
console.log(makeNegative( 0))   //      -> 0
console.log(makeNegative(0.45)) //  	-> -0.45
console.log(`\n--------------------Task Two-----------------------\n`);
function isSumEvenOrOdd(n1, n2, n3){
    return (n1 + n2 + n3) % 2 === 0 ? 'even': 'odd'
}

console.log(isSumEvenOrOdd(0, 1, 4)) // 	-> "odd"
console.log(isSumEvenOrOdd(0, -1, -5)) //     	-> "even"
console.log(isSumEvenOrOdd(0, 0, 0)) // 	-> "even"
console.log(isSumEvenOrOdd(7, 1, 9)) //       	-> "odd"
console.log(isSumEvenOrOdd(1, 1, 1)) //  
console.log(`\n--------------------Task Three-----------------------\n`);
function decimal2(arr){
    return arr.map(x => Number(x.toFixed(2)))

}

console.log(decimal2( [94.356, 8.9752] )) // 		-> [ 94.36, 8.98 ]
console.log(decimal2( [76.62, 128.4, 84] )) // 		-> [ 76.62, 128.4, 84 ]
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] )) // 	-> [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2( [ ] )) // 			-> [  ]
console.log(decimal2( [4.35623, 8.9742] )) //		-> [ 4.36, 8.97 ]
console.log(`\n--------------------Task Four-----------------------\n`);
function myPow(n1, pow){
    let total = 1
    for(let i = 0; i < pow; i ++){
        total *= n1
    }
    return total
}
console.log(myPow(3, 3)) // 	-> 27
console.log(myPow(10, 1)) // 	-> 10
console.log(myPow(100, 0)) // 	-> 1
console.log(myPow(1, 1)) // 	-> 1
console.log(myPow(4, 2)) //  ​	-> 16
console.log(myPow(0, 0)) //  	​-> 1
console.log(myPow(5, 3)) //  ​	-> 125
console.log(`\n--------------------Task Five-----------------------\n`);
function findLongestWord(str){
    let longest = ''
    let most = 0
    str = str.trim()
    if(!str) return ''

    let arr = str.split(' ')
    
    for(let i of arr){
        if(i.length > most){
            longest = i
            most = i.length
        }
    }

    return longest
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // -> "jumped"
console.log(findLongestWord("This is a sample string for testing")) // 	-> "testing" 
console.log(findLongestWord("One two ten"))     // 	-> "One"
console.log(findLongestWord(""))                // 	-> ""
console.log(findLongestWord("      "))          //  -> ""