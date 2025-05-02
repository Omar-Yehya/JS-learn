console.log(`\n--------------------Task One-----------------------\n`);

function calculateTotalPrice1(obj) {
    let cnt = 0

    for (let i in obj) {
        if (i === 'apple') cnt += obj[i] * 2.00
        else if (i === 'orange') cnt += obj[i] * 3.29
        else if (i === 'mango') cnt += obj[i] * 4.99
        else if (i === 'pineapple') cnt += obj[i] * 5.25
    }
    return cnt

}






console.log(`\n--------------------Task Two-----------------------\n`);

function calculateTotalPrice2(obj){

    let cnt = 0

    for (let i in obj) {
        if (i === 'Apple') cnt += (obj[i] * 2.00) - (Math.floor(obj[i] / 2))

        else if (i === 'Orange') cnt += obj[i] * 3.29

        else if (i === 'Mango'){
            let freeMangos = obj[i] / 4
            if (obj[i] >= 4)cnt += (obj[i] * 4.99) - (freeMangos * 4.99)
            cnt += (obj[i] * 4.99)
           
        }
        else if (i === 'Pineapple') cnt += obj[i] * 5.25
    }
    return cnt

}
console.log(calculateTotalPrice2({ Apple: 4, Mango: 5}))
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }))
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }))
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })) 	



console.log(`\n--------------------Task Three-----------------------\n`);

function nthWord(str, num){
    const arr = str.split(' ')
    return arr[num-1] || ''

}


console.log(`\n--------------------Task Four-----------------------\n`);

function isArmstrong(num){
    const arr = String(num).split('')
    let total = 0
    for(let i of arr){
        total += Number(i) ** arr.length
        
    }
 
    return num === total
}

console.log(isArmstrong(1634))

console.log(`\n--------------------Task Five-----------------------\n`);
//tried without str couldnt 
function reverseNumber(num){
    let revNum = ''
    let nummy = String(num)
    for (let i = nummy.length -1; i >= 0; i --){
        revNum += nummy[i]
    }
   
    return Number(revNum)
}



console.log(`\n--------------------Task Six-----------------------\n`);

function doubleOrTriple(arr, bool){
    if (bool){
        return arr.map(x => x * 2)
    }
    else return arr.map(x => x * 3)
}




console.log(`\n--------------------Task Seven-----------------------\n`);

function splitString(str, num){
    if (str.length % num !== 0 || str.length < num) return ''

    return str.slice(0,-num) + '  ' + str.slice(-num)


}



