console.log(`\n--------------------Task One-----------------------\n`);

function toInitials(str) {
    const wordArr = str.split(' ')
    return wordArr[0][0] + '.' + wordArr[1][0] + '.'
}


console.log(toInitials( "Joe Doe"))//	-> "J. D."
console.log(toInitials( "Alex Reyes"))// 	-> "A. R."
console.log(toInitials( "Tom Cruise"))//	-> "T. C."
console.log(toInitials( "Bruce Willis"))// 	-> "B. W."
console.log(toInitials( "Ja Le"))// 	-> "J. L."

console.log(`\n--------------------Task Two-----------------------\n`);
function hasNumbers(str){
    for(let i of str){
        if (/[0-9]/.test(i)) return true
    }
    return false

}

console.log(hasNumbers("")) //  -> false
console.log(hasNumbers("John is 34 years old")) //  -> true
console.log(hasNumbers("Hello 3")) //  -> true
console.log(hasNumbers("125$")) //  -> true
console.log(hasNumbers("   a   ")) //  -> false
console.log(hasNumbers("      ")) //  -> false
console.log(hasNumbers("!@#$%^&*()_+")) //  -> false


console.log(`\n--------------------Task Three-----------------------\n`);

function elementLength(words){
    return words.map((x) => x.length)
}



console.log(elementLength( [ "Hello", "World" ] )) //  -> [ 5, 5 ]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )) //  -> [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] )) //  -> [ 3, 8, 4 ]
console.log(elementLength( [ ] )) //  -> []
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )) //  -> [ 10, 0, 6, 10 ] 


console.log(`\n--------------------Task Four-----------------------\n`);

function isArraySumEvenOrOdd(nums){
    const total =  nums.reduce((acc, curr) => acc + curr,0) % 2
    return  total === 0 ? 'even': 'odd'
}






console.log(isArraySumEvenOrOdd( [ ] )) //  -> "even"
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] )) //      -> "even"
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] )) //     ->  "odd”
console.log(isArraySumEvenOrOdd( [ 0,0 ] )) //  ->  "even"
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )) //   ->  "odd”


console.log(`\n--------------------Task Five-----------------------\n`);

function Reverse(str){
    let strArr = str.split(' ') 

    return strArr.map((x)=> x.split('').reverse().join('') ).reverse().join(' ')
}




console.log(Reverse("Hello World")) //  -> "dlroW olleH"
console.log(Reverse("TechGlobal")) //  -> "labolGhceT"
console.log(Reverse("Basketball is fun")) //  -> "nuf si llabteksaB"
console.log(Reverse("")) //  -> ""
console.log(Reverse("Apples 456")) //  -> "654 selppA"


console.log(`\n--------------------Task Six-----------------------\n`);

function reverseWords(str){
    let strArr = str.split(' ') 

    return strArr.map((x)=> x.split('').reverse().join('') ).join(' ')
}




console.log(reverseWords("Hello World")) //  -> "olleH dlroW"
console.log(reverseWords("TechGlobal")) //  -> "labolGhceT"
console.log(reverseWords("Basketball is fun")) //  -> "llabteksaB si nuf"
console.log(reverseWords("")) //  -> "”
console.log(reverseWords("Apples 456")) //  -> "selppA 654"