console.log(`\n--------------------Task One-----------------------\n`);

function hasLowerCase(str){
    return /[a-z]/.test(str)

}

console.log(`\n--------------------Task Two-----------------------\n`);

function noZero(nums){
    return nums.filter(x => x !== 0)
}



console.log(`\n--------------------Task Three-----------------------\n`);

function numberAndSquare(nums){
    const listy = []
    for (let i of nums){
        listy.push([i, i**2])
    }
    return listy
}

console.log(`\n--------------------Task Four-----------------------\n`);

function containsValue(arr, str){
    for (let i of arr){
        if (i === str) return true
    }
    return false 
}


console.log(`\n--------------------Task Five-----------------------\n`);

function reverseSentence(str){
    const arr = str.split(' ')
    if (arr.length <= 1 )return "There is not enough words!"
    return arr.reverse().join(' ')

}




console.log(`\n--------------------Task Six-----------------------\n`);

function removeStringSpecialsDigits(str){
    let newStr = ''
    for( let i of str){
        if( /[a-z]/i.test(i) || i === ' ') newStr += i
    }
    return newStr


}

console.log(`\n--------------------Task Seven-----------------------\n`);

function removeArraySpecialsDigits(arr){
const newArr = []

    for (let i of arr){
        let onlyLetter = i.replace(/[^a-z]/gi, '')
        newArr.push(onlyLetter)
    }
    return newArr

}



console.log(`\n--------------------Task Eight-----------------------\n`);

function getCommons(arr1, arr2){
    const same = []
    for (let i of arr1){
        if (arr2.includes(i) && !(same.includes(i))) same.push(i)
    }
    return same
}

console.log(`\n--------------------Task Nine-----------------------\n`);

function noXInVariables(arr){
        const newArr = []

        for (let item of arr){
            if (typeof(item) === 'string'){

                let noX = item.replace(/x/gi, '')
                newArr.push(noX)

            }else newArr.push(item)
            
        }


    
    return newArr

}

