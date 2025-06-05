console.log(`\n--------------------Task One-----------------------\n`);

function countPalindrome(str){
    let cnt = 0
    if(!str.trim()) return 0
    const arr = str.split(' ')
    const rev = arr.map(x => x.split('').reverse().join(''))

    for (let i = 0; i < arr.length; i ++){
        if(arr[i].toLowerCase() === rev[i].toLowerCase()) cnt ++
     } 
    return cnt
}



console.log(`\n--------------------Task Two-----------------------\n`);

function sum(arr, bool){
    let cnt = 0
    if(bool){
        for(let i = 0; i < arr.length; i ++){
        if (i % 2 === 0) cnt += arr[i]
        }

    }else{
        for(let i = 0; i < arr.length; i ++){
            if (i % 2 !== 0) cnt += arr[i]
        }
    }

    return cnt
}


console.log(`\n--------------------Task Three-----------------------\n`);
function nthChars(str, n1){
    let nthStr = ''
    
    for(let i = n1-1; i < str.length; i+=n1){
        nthStr += str[i]
    }
    return nthStr

}


console.log(`\n--------------------Task Four-----------------------\n`);

function canFormString(s1, s2){
     const hashy = {}
    s2 = s2.toLowerCase().replace(/\s+/g,'')
    s1 = s1.toLowerCase()

     for(let i of s1){
        if (i in hashy) hashy[i] +=1
        else hashy[i] =1
     }

     for(let i of s2){
        if (hashy[i] <= 0) return false 
        if(i in hashy)hashy[i] -= 1
        else return false 
     }
     
          return true 
}



console.log(`\n--------------------Task Five-----------------------\n`);
function isAnagram(s1, s2){
    s1 = s1.toLowerCase().replace(/\s/g,'')
    s2 = s2.toLowerCase().replace(/\s/g,'')
    let hashy = {}
    if (s1.length !== s2.length) return false
    for(let i of s1){
        if (i in hashy) hashy[i] +=1
        else hashy[i] =1
     }

     for(let i of s2){
        if (hashy[i] <= 0) return false 
        if(i in hashy)hashy[i] -= 1
        else return false 
     }
     
          return true 
   

}



console.log(`\n--------------------Task Six-----------------------\n`);

function count(arr, bool){
    let cnt = 0
    if(bool){
        for(let i of arr){
            if(i % 2 === 0) cnt ++
        }
        return cnt 
    }else{
        for(let i of arr){
            if(i % 2 !== 0) cnt ++
        }
        return cnt 
    }
}


console.log(`\n--------------------Task Seven-----------------------\n`);

function sumDigitsDouble(str){
    let sum = 0
    for(let i of str){
        if (/[0-9]/.test(i))sum += Number(i)
    }
    if (sum === 0) return -1
    return sum * 2

}

console.log(sumDigitsDouble('java'))


console.log(`\n--------------------Task Eight-----------------------\n`);

function countOccurrence(s1, s2){
    const hashy1 = {}
    const hashy2 = {}
    let max = Infinity
    s2 = s2.toLowerCase().replace(/\s/g,'')
    s1 = s1.toLowerCase().replace(/\s/g,'')

     for(let i of s1){
        if (i in hashy1) hashy1[i] += 1
        else if ( s2.includes(i)) hashy1[i] = 1
     }

     for(let i of s2){
        if (i in hashy2) hashy2[i] +=1
        else if(!s1.includes(i)) return 0
        else hashy2[i] =1
     }

     
     for(let i in hashy1){
        if (i in hashy2) max = Math.min(hashy1[i], max)
        else return 0 
     }
     return max

     
}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))
