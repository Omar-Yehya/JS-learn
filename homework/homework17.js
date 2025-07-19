console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
function findMedian(arr1, arr2){
let fullArr = [...arr1, ...arr2]
if (fullArr.length % 2 === 0){
    return ( (fullArr[fullArr.length/2 - 1])  + (fullArr[fullArr.length/2]) ) / 2

}else return fullArr[Math.floor(fullArr.length / 2)]

}

console.log(findMedian([1, 3], [2])) //  -> 2
console.log(findMedian([1, 2], [3, 4])) //  -> 2.5
console.log(findMedian([4], [3])) //  -> 3.5
console.log(findMedian([4], [])) //   -> 4
console.log(findMedian([0], [0, 1]))
console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
function calculateFactorial(num){

    let factorial = 1
    for(let i = num; i > 1; i --){
 
         factorial *= i
    }
    return factorial
}

console.log(calculateFactorial(0)) //  -> 1
console.log(calculateFactorial(1)) //  -> 1
console.log(calculateFactorial(5)) //  -> 120
console.log(calculateFactorial(6)) //  -> 720
console.log(calculateFactorial(10)) //  -> 3628800
console.log(calculateFactorial(4)) //  -> 24
console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
function calculateGCD(n1, n2){
    let large = Math.max(n1,n2)
    let small = Math.min(n1,n2)

    for(let i = large; i >= 0; i -- ){
       
        if(large % i  === 0 && small % i === 0) return i
    }
    return 0
}

console.log(calculateGCD(8, 12)) //  -> 4
console.log(calculateGCD(17, 5)) //  -> 1
console.log(calculateGCD(48, 18)) //  -> 6
console.log(calculateGCD(0, 5)) //-> 5
console.log(calculateGCD(21, 14))  // -> 7
console.log(calculateGCD(60, 48)) //  -> 12
console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
function calculateLCM(a, b){
    let x = a, y = b;
  while (y) {
    [x, y] = [y, x % y];
  }
  return Math.abs(a * b) / x;
}


console.log(calculateLCM(8, 12)) //  -> 24
console.log(calculateLCM(17, 5)) //  -> 85
console.log(calculateLCM(48, 18)) //  -> 144
console.log(calculateLCM(0, 5)) //  -> 0
console.log(calculateLCM(21, 14)) //  -> 42
console.log(calculateLCM(60, 48)) //   -> 240
//haha









