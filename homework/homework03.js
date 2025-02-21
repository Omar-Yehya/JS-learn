console.log(`\n--------------------Task One-----------------------\n`)

let ran1= Math.floor(Math.random()*(100-1+1)+1)
let ran2= Math.floor(Math.random()*(100-1+1)+1)
let ran3= Math.floor(Math.random()*(100-1+1)+1)
let avg= (ran1+ran2+ran3)/3
console.log(avg>=50)

console.log(`\n--------------------Task Two-----------------------\n`)

let ran_1= Math.floor(Math.random()*(3-1+1)+1)
let ran_2= Math.floor(Math.random()*(3-1+1)+1)
let ran_3= Math.floor(Math.random()*(3-1+1)+1)
console.log(ran_1, ran_2, ran_3)
if( ran_1===ran_2&& ran_1===ran_3){
    console.log('TRIPLE MATCH')
}else if( ran_1===ran_2 || ran_1==ran_3 || ran_2===ran_3){
    console.log('DOUBLE MATCH')
}else{
    console.log('NO MATCH')
}

console.log(`\n--------------------Task Three-----------------------\n`)

function hasA(word){
    if (word.includes('a') || word.includes('A')){
        return true 
    }
    return false 
}
 
console.log(`\n--------------------Task Four-----------------------\n`)

function doubleOrTripleWord(word){
    if(word.length % 2 == 0){
        return word+word+word
    }
    return word+word

}


console.log(`\n--------------------Task Five-----------------------\n`)

function firstWord(word){
    let array= word.split(' ')
    return array[0]

}



console.log(`\n--------------------Task Six-----------------------\n`)

function lastWord(word){
    let array = word.split(' ')
    return array[array.length-1]
}



console.log(`\n--------------------Task Seven-----------------------\n`)



function firstLastWord(word){
    let array = word.split(' ')
    return array[0]+array[array.length-1]

}

console.log(`\n--------------------Task 8-----------------------\n`)

function startVowel(word){
    return /^[aeiou]/i.test(word)

}





console.log(`\n--------------------Task 9-----------------------\n`)


function swap4(word){
    if (word.length<8){
        return ''
    }
    return word.slice(-4)+ word.slice(4,-4)+word.slice(0,4)
}
console.log(swap4('JavaScript'))

console.log(`\n--------------------Task 10-----------------------\n`)

function swapFirstLastWord(word){
    word=word.trim()
if(word.split(' ').length<2){
    return ""
}
    
    let first = word.slice(0, word.indexOf(' '))
    let last = word.slice(word.lastIndexOf(' ')+1)
    let middle = word.slice(word.indexOf(' '),word.lastIndexOf(' ')+1)
    let full=last+middle+first
    return full 
    
}



