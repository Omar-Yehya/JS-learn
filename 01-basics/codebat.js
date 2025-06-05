function close10(int1,int2){
      
    if (Math.abs(int1-10)===Math.abs(int2-10)){
        return 0
    }else if( Math.abs(int1-10)<Math.abs(int2-10)){
        return int1
    }
    return int2
}


function stringE(word){
    eCounter={}
    for(let letter of word){
        if (!(letter in eCounter)){
            eCounter[letter]=1
        }else{
            eCounter[letter]++
        }
    }

    if (eCounter['e']<=3 && eCounter['e']>0){
        return true
    }else{
        return false
    }
   
}


function everyNth(word,index){
        let newStr=''
        for(let i=0; i<word.length;i+=index){
            newStr+=word[i]
        }
    
        return newStr
}


function monkeyTrouble(aSmile, bSmile){
    if ((aSmile&&!bSmile)||(!aSmile&&bSmile)){
        return false
    }
    return true

}
//switch the first and last word 
function switchFirstAndLast(word){

    let first = word.slice(0, word.indexOf(' '))
    let last = word.slice(word.lastIndexOf(' ')+1)
    let middle = word.slice(word.indexOf(' '),word.lastIndexOf(' ')+1)
    console.log(last, middle, first)
}

function switchFirstAndLastList(word){
    const wordList=word.split(' ')
    let fword=wordList[0]
    let lword= wordList[wordList.length-1]
    let middle= wordList[1, wordList.length-2]
    console.log(lword, middle, fword)

}

// before 7 or after 20. Return true if we are in trouble.



function parrotTrouble(talking, hour){
    if(talking && (hour<7||hour>20)){
        return true 
    }else{
        return false 
    }
    
}



function posNeg(a, b, negative){
 if (negative){
    return (a<0 && b<0)
 }else{
    return ((a<0&& b>0)|| (a>0&&b<0))
 }
}

function frontBack(string){
    if(string.length==1){
        return string
    }
    return string.at(-1)+string.slice(1,-2)+string[0]
}

function or35(n){
    return (n%3==0||n%5==0)
}

function icyHot(temp1, temp2){
    return ((temp1>100 && temp2<0)||(temp2>100 && temp1<0))
}

function loneTeen(a, b){
    if( ((a>=13 && a<=19) && 
    (b<13 ||b>19)) ||
    ((b>=13 && b<=19) && 
    (a<13 ||a>19))
    ){
    return true
    }   
    return false
}


function startOz(string){
    if(string[0]=='o' && string[1]=='z'){
        return string.slice(0,2)
    }else if (string[0]=='o' && string[1]!='z'){
        return string[0]
    }else if (string[0]!='o' && string[1]=='z'){
        return string[1]
    }else{
        return ""
    }
}

function in3050(a,b){
    return ((a>=30 && b<=40) || (a>=40 && b<=50))
}


function lastDigit(a, b){
    let A=a.toString()
    let B= b.toString()
    return (A.at(-1)==B.at(-1))
}

function sumDouble(a,b){
    if(a===b){
        return (a+b)*2
    }
    return a+b
}


function makes10(a,b){
    if(a===10 || b===10){
        return true
    }else if( a+b===10){
        return true
    }
    return false 
}

function notString(str){
    if(str.slice(0,3)==='not'){
        return str
    }else{
        return `not ${str}`
    }
    
}

function front3(str){
    let three= str.slice(0,3)
    return three+three+three
}

function front22(str){
    if(!str){
        return ""
    }
    if (str.length<2){
        return str+str+str
    }else{
        return str.slice(0,2)+ str+ str.slice(0,2)
    }
}

function in1020(a,b){
    if((a<20 && a>10)|| (b<20 && a>10)){
        return true 
    }
    return false
}

function delDel(str){
    if(!str){
        return " "
    }
    let skipValue=str.search('del')
    if(skipValue !=-1){
        return (str.slice(0,skipValue)+str.slice(skipValue+3,str.length))
    }
    return str
}

function intMax(a,b,c){
    return Math.max(a,b,c)
}

function max1020(a,b){
    if((a>=10 || a<=20) && (b>=10||b<=20)){
        return Math.max(a,b)
    }else if((a>=10 || a<=20)&& (b<10||b>=20)){
        return a
    }else if((a<10 || a>20)&& (b<10||b>=20)){
        return b
    }
    return 0
    
}

function endUp(word){
    if (!word){
        return ""
    }
    if (word.length<=3){
        return word.toUpperCase()
    }else{
            return word.slice(0,word.length-3)+word.slice(word.length-3).toUpperCase()

    }
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/


function stringTimes(str, n){
    let newString=""

    for(let i=0; i<n; i++){
        newString+=str
    }
    return newString
}

function doubleX(str){
    let firstX= str.search('x')
    if (firstX==-1){
        return false 
    }
    return (str[firstX+1]=='x')
}

//remove everything that was not a letter 

//could use forr loop or .join() and then includes 
function array123(nums){
    let cnt=0
    while(cnt<nums.length-2){

        if((nums[cnt]==1) && (nums[cnt+1]==2) && (nums[cnt+2]==3)){
            return true 

        }
        cnt++
    }
    return false 
}

//my solution  better solution use forloop  first if statement not needed 
function altPairs(str){
    let switchState=true
    let newString=''
    let index=0

    while(index<=str.length-1){
        if (index>str.length){    
            return newString
        }
        if(switchState){                                
            newString+=str[index]
            index+=1
            switchState=false
        }else if(!switchState){
            newString+=str[index]
            index+=3
            switchState=true
        }

    }
    return newString
}


function noTriples(nums){

    for(let i=0; i<nums.length; i++){
        if (nums[i]==nums[i+1] && nums[i+1]==nums[i+2])
            return false 
    }
    return true 


}


function frontTimes(str, n){
    let newStr=''
    for (let i=0; i<n; i++){
        newStr+=str.slice(0,3)

    }
    return newStr
}

function stringBits(str){
    let newStr=''
    for(let i=0; i<str.length; i+=2){
        newStr+=str[i]

    }
    return newStr
}

function arrayCount9(nums){
    let cnt=0

    for(let i of nums){
        if (i===9){
            cnt++
        }
    }
    return cnt 
}

function stringMatch(a,b){
    let cnt=0
    for(let i=0; i<a.length-1; i++){
        if(a[i]==b[i] && a[i+1]==b[i+1]){
            cnt++
        }
    
    }
    return cnt
}
// continue 
function stringYak(str){
    let newStr=''

    for(let i =0; i<str.length;i++){
        if(str[i]=='y' && str[i+2]=='k'){
            i+=2
            continue
        }
        newStr+=str[i]

    }
    return newStr

}

//hish the fish 
function has271(nums){
    for(let i= 0; i<nums.length; i++){
        if(nums[i]+5==(nums[i+1]) && (nums[i]-1==(nums[i+2]))|| (nums[i]-2==(nums[i+2])) || nums[i]+1==(nums[i+2])){
            return true 
        }

    }
    return false 
    
}

function countXX(str){

    let cnt=0
    for(let i=0; i<str.length; i++){
        if(str[i]=='x' && str[i+1]=='x'){
            cnt++
            continue
        }
    }
    return cnt
}


function stringSplosion(str){

    let newStr=''

    for(let i=0; i<str.length; i++){
        newStr+=str.slice(0,i)
      
    }
    return newStr+=str.slice(0)
}

function arrayFront9(nums){

    for (let i=0; i<4;  i++){
        if(nums[i]==9){
            return true
        }
    }
    return false
        
}

function stringX(str){
    let newStr=''
    for(let i=0; i<str.length; i++){
        if (str[i]=='x' && i>0 && i<str.length-1){
            continue 
        }
        newStr+=str[i]
    }
    return newStr
}


function array667(nums){
    let cnt=0
    for(let i=0; i<nums.length; i++){
        if(nums[i]==6 && (nums[i+1]==6 || nums[i+1]==7)){
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

function helloName(name){
    return `Hello ${name}!`
}
function makeOutWord(out, word){
    return out.slice(0,2)+word+out.slice(2)
}
function firstHalf(str){
    return str.slice(0,str.length/2)
}
function nonStart(a,b){
    return a.slice(1)+b.slice(1)
}

function theEnd(str,front){
    if(front){
        return str[0]
    }
    return str.at(-1)
}

function endsLy(str){
    return str.slice(-2)=='ly'
}

function middleThree(str){
    let mid= Math.floor(str.length/2)
    return str.slice(mid-1,mid+2)
}

function lastChars(a,b){
    if (!a){
        return `@${b.at(-1)}`
    }else if (!b){
        return `${a[0]}@`
    }
    return a[0]+b.at(-1)

}

function seeColor(str){
    let colorRed=str.slice(0,3)
    let colorBlue=str.slice(0,4)
    if(colorRed=='red'){
        return colorRed
    }else if(colorBlue=='blue'){
        return colorBlue
    }
    return ''
}

function extraFront(str){
    let newStr=''
    for(let i=0; i<3; i++){
        newStr+=str.slice(0,2)
     }
    return newStr
}


//Given a string and a second "word" string, we'll say that the word matches the string 
// if it appears at the front of the string, except its first char does not need to match 
// exactly. On a match, return the front of the string, or otherwise return the empty string.
//  So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The 
// word will be at least length 1.
function startWord(str, word){
    let index= str.search(word.slice(1,word.length))
    if (word.length==1){
        return str[0]
    }else if(index>1){
        return ''
    }
    return str.slice(index-1, word.length)

}

function makeAbba(a,b){
    return a+b+b+a
}

function extraEnd(str){
    let lastTwo= str.slice(-2)

    return lastTwo+lastTwo+lastTwo
}

function withoutEnd(str){
    return str.slice(1,str.length-1)

}

function left2(str){
    if (str.length<3){
        return str
    }
    return str.slice(2)+str.slice(0,2)
}

function withouEnd2(str){
    return str.slice(1,-1)
}

function nTwice(str, n){
    return str.slice(0,n)+str.slice(-n)
}

function hasBad(str){
    return str.search('bad')<2
}

function conCat(a,b){
    if (a.at(-1)==b[0]){
        return a.slice(0,-1)+b
    }
    return a+b
}

function frontAgain(str){
    return str.slice(0,2)===str.slice(-2)
}


function without2(str){
    if(str.lastIndexOf(str.slice(0,2))!==0){
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



function withoutX(str){
    let Str=str.replace(/[x]$/i,'')
    return Str.replace(/^[x]/i,'')
}

function makeTags(tag, word){
        return `<${tag}>${word}<${tag}>`
}

function firstTwo(str){
    return str.length<=2 ? str: str[0]+str[1]
}

function comboString(a, b){
    if (a.length <= b.length){
        return a + b + a
    }
    return b + a + b

}

function right2(str){
    if(str.length<=2){
        return str
    }
        
    return str.slice(-2) + str.slice(0,-2)
      
}

function middleTwo(str){
    let mid = str.length/2
    return str[mid-1]+str[mid]
}



// java is 4 char long 
// 3 is our number 
// 3+2 = 5 
//5 is biiger then java.length so return the first 2 char 

function twoChar(str, index){
    if(index + 2 > str.length){
        return str.slice(0,2)

    }
    return str.slice(index, index+2)
}

function atFirst(str){
    if (str.length<2){
        return `${str}@`
    }
    return str.slice(0,2)

}

function lastTwo(str){
    if (str.length === 1){
        return str
    }else if(str.length === 2){
        return str.at(-1)+str[0]
    }
    return str.slice(0,-2)+str.at(-1)+str.at(-2)
}

function minCat(a, b){

        if (a.length===b.length){
            return a+b
        }else if (a.length >= b.length){
            return a.slice(-b.length)+b
        }
        return a+b.slice(-a.length)
}

function deFront(str){
    if(str[0] === 'a' && str[1] === 'b'){
        return str
    }else if(str[0] === 'a' && str[1] !=='b'){
        return str[0] + str.slice(2)
    }else if (str[0] !== 'a' && str[1] === 'b'){
        return str[1] + str.slice(2)
    }
    return str.slice(2)

}

function withoutX2(str){
    if( str[0] === 'x' && str[1] === 'x' ){
        return str.slice(2)
    }else if(str[0] === 'x' && str[1] !=='x'){
        return str.slice(1)
    }else if(str[0] !== 'x' && str[1] ==='x'){
        return str[0] + str.slice(2)
    }
    return str
}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/


function firstLast6(nums){
    return nums[0] === 6 || nums[nums.length-1] === 6

}

function commonEnd(a, b){
    return a[0] === b[0] || a.at(-1) === b.at(-1)
}


function reverse3(nums){
    return nums.reverse()
}

function middleWay(a, b){
    return  newArray=[a[1],b[1]]
    
}

function no23(nums){
    return !(nums.includes(3) || nums.includes(2))
}

function fix23(nums){
    if (nums[0] === 2 && nums[1] === 3){
        nums=[nums[0], 0, nums[2]]
        return nums
    }else if(nums[1] === 2 && nums[2] ===3 ){
        nums=[nums[0], nums[1], 0]
        return nums
    }
    return nums
}

function makeMiddle(nums){
    let mid=nums.length/2
    return [nums[mid-1], nums[mid]]
}

function midThree(nums){
    let mid = Math.floor(nums.length/2)
    return [nums[mid-1], nums[mid], nums[mid+1]]

}

function unlucky1(nums){
   return nums[0] === 1 && nums[1] ===3 
   || nums[1] === 1 && nums[2] ===3 
   || nums[nums.length-2] === 1 && nums[nums.length-1] ===3 
   || nums[nums.length-3] === 1 && nums[nums.length-2] ===3

}


function sameFirstLast(nums){
    return nums.length>=1 && nums[0] === nums.at(-1)

}

function sum3(nums){
    return nums[0] + nums[1] + nums[2]
}

function maxEnd3(nums){
    let [num1, num2, num3] = nums
    let max=Math.max(num1,num2,num3)
    nums=[max, max, max]
    return nums
}

function makeEnds(nums){
    return [nums[0], nums.at(-1)]
}

function makeLast(nums){
    let doubleLength = nums.length * 2
    let db=[]
    for(let i = 0; i< doubleLength-1; i++){
        db.push(0)
    }
    db.push(nums.at(-1))
    return db 

}

function start1(a, b){
    //console.log(( a[0] === 1 ? 1: 0) +(b[0] === 1 ? 1: 0)) better way 
    let cnt=0
    if(a[0] === 1){
        cnt++
        if (b[0] === 1){
            return 2
        }
    }else if(b[0] === 1){
        return 1
    }
    return cnt
}

function plusTwo(a, b){
    let newArray = []
    newArray=[...a, ...b]
    return newArray
}

function maxTriple(nums){

    return Math.max(nums[0],nums[1],nums[2])
}

function make2(a, b){
    let newArray = [...a,...b].slice(0,2)
    return newArray
}

function makePi(){
    return [3, 1, 4]
}

function rotateLeft3(nums){
    return [nums[1],nums[2],nums[0]]
    //return nums.slice(1).concat(nums[0]) much better way 
}

function sum2(nums){
    if (nums.length<2){
        if (nums.length === 0){
            return 0
        }
     return nums[0] 
    }
    return nums[0]+nums[1]
}


function has23(nums){
    return nums.includes(2) || nums.includes(3)
}

function double23(nums){
  
    return (nums[0] === 2 && nums[1] === 2) || (nums[0] ===3 && nums[1] ===3)
}

//FILTER GOATED arrar.filter(condition),index

function biggerTwo(a,b){
    if(a[0]+a[1]>= b[0] + b[1]){
        return a
    }
    return b
}

function swapEnds(nums){
    if (nums.length>1){
       let last = nums.at(-1)
       nums[nums.length-1]=nums[0]
       nums[0] = last

    }
    return nums
  
    
}

function frontPiece(nums){
    if (nums.length>=2){
        return [nums[0], nums[1]]
    }else  if(nums.length === 0){
        return []
    }
    return [nums[0]]
}


function front11(a, b){
    let result =[]
    if(a.length >0) result.push(a[0])
    if(b.length > 0) result.push(b[0])
    
    return result
}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function mapBully(map1){
    temp = map1['a']
    map1['a']=''
    map1['b']= temp

    return map1

}

function topping1(object){
    object['bread'] = 'butter'
    if (object['ice cream']){
        object['ice cream'] = 'cherry'
    }
    

    return object
}

function mapAB2(object){
    if(('a' in object && 'b' in object) && (object['a'] === object['b'])){
        delete object.a
        delete object.b

    }
    return object
}

function mapShare(object){
    if(object['a']){
        object['b'] = object['a']
    }
    
    delete object.c
    
    return object
}

function topping2(object){
    if('ice cream' in object){
        object['yogurt'] = object['ice cream']
    }
    if ('spinach' in object){
        object['spinach'] = 'nuts'
    }
    return object
}

function mapAB3(object){
    if(!('a' in object) && ('b' in object)){
        object['a'] = object['b']
    
    }else if (!('b' in object) && ('a' in object)){
        object['b'] = object['a']
    }

    return object
}

function mapAB(object){
    if('a' in object && 'b' in object){
        object['ab'] = object['a'] + object['b']
    }
    return object
}

function topping3(object){
    if(object['potato']){
        object['fries'] = object['potato']
    }
    if (object['salad']){
        object['spinach'] = object['salad']
    }
    return object

}

function mapAB4(object){
    if('a' in object && 'b' in object){
        if(object['a'].length > object['b'].length){
            object['c'] = object['a']
        }else if(object['a'].length < object['b'].length){
            object['c'] = object['b']
        }else{
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

function cigarParty(cigars, isWeekend){
    return (cigars >= 40 && cigars <= 60 && isWeekend === false) || (cigars >= 40 && isWeekend === true)
}

function dateFashion(you, date){
    if(you >= 8 || date >=8){
        return 2
    }else if(you <= 2 || date <= 2){
        return 0
    }
    return 1

}

function squirrelPlay(temp, isSummer){
    return (temp >= 60 && temp <= 90 && isSummer === false) || (temp >= 60 && temp <= 100 && isSummer === true)
}


function caughtSpeeding(speed, isBirthday){
    if(speed >= 81){
        if (isBirthday === true && speed <= 86){
            return 0
        }
        return 2   
    }else if (speed >= 61 && speed <= 80){
        if (isBirthday === true && speed <= 85 ){
            return 0
        }
        return 1
    }
    return 0
}

function sortaSum(a,b){
    let sum = a+b
    if (sum >= 10 && sum <=19){
        return 20
    }
    return sum
}

function alarmClock(day, vacation){
    if ( (vacation === true && day >= 1 && day <= 5) || (vacation === false && (day ===0 || day === 6) ) ) {
        return '10:00'
    } else if (vacation === true && (day ===0 || day === 6) ){
        return 'off'
    }
    return '7:00'
}

function love6(a, b){
    return (a === 6 || b === 6) || (a + b === 6) || Math.abs(a-b) === 6
}

function in1To10(n, outsideMode){
    if ( outsideMode === true && (n <=1 || n >= 10) ){
        return true 
    }else if (n >= 1 && n <= 10){
        return true
    }
    return false       
}

function specialEleven(n){
    return n % 11 ===0 || n % 11 ===1
}

function more20(n){
    return n % 20 === 1 || n % 20 === 2
}

function old35(n){
    return (n % 5 ===0 && n % 3 !==0) || (n % 3 === 0 && n % 5 !== 0)
}

function less20(n){
    return n % 20 === 18 || n % 20 === 19 
}

function nearTen(num){
    return num % 10 === 1 || num % 10 === 2 || num % 10 === 9 || num % 10 === 8
}

function teenSum(a,b){
    if((a >= 13 && a <= 19) || (b >= 13 && b <= 19)){
        return 19
    }
    return a+b
}

function answerCell(isMorning, isMom, isAsleep){
    if(isAsleep){
        return false
    }else if (isMorning  && isMom){
        return true 
    }else if(!isMorning){
        return true
    }
    return false 
}

function teaParty(tea, candy){
    if (tea <= 5 || candy <= 5){
        return 0
    }else if(tea * 2 <= candy || candy * 2 <= tea ){
        return 2
    }
    return 1
}


function fizzString(str){
    let newStr = ''
    if (str[0] === 'f'){
        newStr += 'Fizz'
    }
    if (str.at(-1) === 'b'){
        newStr += 'Buzz'
    }
    return newStr || str 

}

function fizzString2(n){
    let str=''
    if (n % 3 === 0){
        str+="Fizz"
    }
    if (n % 5 === 0){
        str += "Buzz"
    }
    if (str){
        return str += '!'
    }else{
        return String(n) +'!'
    }
}

// git MERGE VS git REBASE 


function twoAsOne(a,b,c){
    let checker = Math.max(a,b,c)- Math.min(a,b,c)
    if(checker === a || checker === b || checker === c ){
        return true
    }
    return false 

}

function inOrder(a, b, c, bOk){
    if (bOk){
        return c > a && c > b
    }
    return  a < b  && b < c 
}

function inOrderEqual(a, b, c, equalOk){
    if(equalOk){
        return c >= b &&  b >= a
    }
    return a < b  && b < c
}

function lastDigit(a, b, c){
    return a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10
}

function lessBy10(a, b, c){
    return (Math.max(a,b,c) - Math.min(a,b,c) )>=10
}

function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles && die1 === die2){
        if(die1 === 6 ){
            die1 = 1
        }else {
            die1 +=1
        }
        return die1 + die2
    }

    return die1 + die2
}

function maxMod5(a, b){
    if(a === b){
        return 0
    }
    return a % 5 === b % 5 ? Math.min(a,b): Math.max(a,b)
}

function redTicket(a, b, c){
    if (a === 2 && b === 2 && c === 2){
        return 10 
    }else if (a === b && b === c){
        return 5
    }
    return (a !== b && a !== c) ? 1: 0
}

function greenTicket(a, b, c){
    if(a === b && b ===c){
        return 20
    }
    return (a === b || a === c || b === c) ? 10: 0 
}

function blueTicket(a, b, c){
    if (a + b === 10 || a + c === 10 || c + b === 10){
        return 10
    }else if (a + c  ===  a + b -10  ||b + c  === a + b -10){
        return 5
    }
    return 0
}

function shareDigit(a,b){
    return (a % 10 === b % 10  || a % 10 === Math.floor(b/10))  || (Math.floor(a/10) === b % 10 || Math.floor(a/10) === Math.floor(b/10)) 
}

function sumLimit(a,b){
    let sum = a+b
   return String(sum).length > String(a).length ? a: sum 
}

/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

// could be wrong 
function makeBricks(small, big, goal){
        return (small + (big * 5)) >= goal

}

function loneSum(a, b, c){
    let sum =0
    if (a !== b && a !== c) sum += a
    if (b !== a && b !== c) sum += b
    if (c !== a && c !== b) sum += c

    return sum
}

function luckySum(a, b, c){
    let sum = 0 
    if (a === 13)  return sum
    if (b === 13)  return sum += a
    if (c === 13)  return sum += a + b
    return a+b+c
}


function noTeenSum(a, b, c){
    return fixTeen(a) + fixTeen(b) + fixTeen(c)
}

const fixTeen = (n) =>  {
    if ((n >= 13 && n <= 19)   && (n !==15 && n !== 15)){
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
function roundSum(a, b, c){
    return round10(a) + round10(b) + round10(c) 
}

function round10(n){
    let rem = n % 10
    return rem > 5 ? (n - rem) + 10: n - rem
}

// the question is worded disgustingly 
function closeFar(a, b, c){
    let isBclose = Math.abs(a-b) <=1
    let isCclose = Math.abs(a-c) <=1

    let isBfar = Math.abs(b-c) >=2
    let isCfar = Math.abs(c-b) >=2

    return (isBclose && isCfar) || (isCclose && isBfar)
}

function blackjack(a,b){
    if(a > 21 ){
        a = 0
    }
    if (b > 21){
        b=0
    }
    return Math.max(a,b)
}

function evenlySpaced(a, b, c){
   let arr = [a,b,c].sort((x, y) => x-y)
   return arr[2] - arr[1] === arr[1] - arr[0]
}

function makeChocolate(small, big, goal){
    if(big){
        if(5 <= goal){
            goal-=5
            big --
        }
    }
    if(small){
        if (small >= goal){
            return goal
        }
    }
    return -1
}
// above is mine only works for test cases below is dynamic 
function makeChocolate(small, big, goal){
    let BigBarUsed = Math.min(Math.floor(goal/5), big)
    goal -= BigBarUsed *5

    if(small >= goal){
        return goal
    }
    return -1 

}


/*
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
********************************************************
 LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP LVL UP
*/

function doubleChar(str){
    let double=''
    for(let i of str){
        double +=[i] + [i]
    }
    return double
}

function countHi(str){
    let cnt =0
    for(let letter=0; letter < str.length; letter ++ ){
        if (str[letter] ==='h' && str[letter + 1] === 'i'){
            cnt ++
        }
    }
    return cnt 
}

function catDog(str){
    let catCnt = 0
    let dogCnt = 0
    for(let letter = 0; letter < str.length-2; letter++){
        if (str[letter] === 'c' && str[letter+1] === 'a' && str[letter+2] === 't'){
            catCnt ++
        }
     }
    for(let letter = 0; letter < str.length-2; letter++){
        if (str[letter] === 'd' && str[letter+1] === 'o' && str[letter+2] === 'g'){
            dogCnt ++
        }
    }
   return catCnt === dogCnt
}

function countCode(str){
    let cnt =0
    let start=0
     
    for(let i = 0; i < str.length; i++){
        if (/co.e/.test(str.slice(start,i+4))){
            start++
            cnt++
        }else{
            start++
        }

    }
    return cnt
}

function endOther(a, b){
    a = a.toLowerCase()
    b = b.toLowerCase()

    let aLength = a.length
    let bLength = b.length 

    if(aLength <= bLength){
        console.log(b.slice(-aLength), a)
        return b.slice(-aLength) === a
    }else{
        console.log(-bLength, b)
        return a.slice(-bLength) === b
    }

}

function xyzThere(str){
    for(let i=0; i < str.length-2; i ++){
        if( str[i] === 'x' && str[i+1] === 'y' && str[i+2] === 'z'){
            if (i === 0 || str[i-1] !== '.'){
                return true 
            }
        }
    }
    return false 
}

function bobThere(str){
    return /b.b/.test(str)
}

function xyBalance(str){
    let xBalance = true
    for(let i = 0; i<str.length; i++){
        if(str[i] === 'x') xBalance = false
        if (str[i] === 'y' ) xBalance = true
    }
    return xBalance
}

function mixString(a, b){
    let newStr=''
    let bigger =''
    let smaller = Math.min(a.length, b.length)
    if (a.length>=b.length){
         bigger = a
    }else bigger = b
    for(let i = 0; i < smaller; i++){
        newStr += a[i]
        newStr += b[i]
    }
    return newStr += bigger.slice(smaller)
}

function repeatEnd(str, n){
    let newStr = ''
    for(let i= 0; i < n; i++){
        newStr +=str.slice(-n)
    }
    return newStr
}


function repeatFront(str, n){   
    newStr = ''
    for(let i = n; i >= 0;  i --){
        newStr += str.slice(0, i)
    }
    return newStr
}

function repeatSeparator(word, sep, count){
    let newStr= ''
    for(let i = 0; i <count; i++ ){
        newStr += word
        newStr += sep
        
    }
    return newStr.slice(0, -sep.length)

}

function prefixAgain(str, n){
    let checker = str.slice(0, n)

    for(let i = n; i <= str.length-1; i++){
        if(str.slice(i, i+n) === checker){
            return true 
        }
    }
    return false
}

function xyzMiddle(str){
    let index = str.indexOf('xyz')
    return index !== 1 && index === str.slice(index+3).length || index+1 === str.slice(index+3).length || index === str.slice(index+3).length+1
}

//<3
function getSandwich(str){
    let firstIdx= str.indexOf('bread')
    let lastIdx =str.lastIndexOf('bread')
    if (firstIdx === -1 || firstIdx === lastIdx ){
        return ""
    }

    return str.slice(firstIdx+5, lastIdx)
}

function sameStarChar(str){
    for(let i = 0; i <= str.length; i++){
        if(str[i] === '*'){
            if(str[i-1] === str[i+1]){
                return true
            }
        }
    }
    return false 
}

function oneTwo(str){
    let newStr=''
    let notNeeded = str.length %3
    let moddedStr = notNeeded !==0 ? str.slice(0, -notNeeded): str
    
    for(let i = 0; i < moddedStr.length; i +=3){
       newStr += str[i+1]
       newStr += str[i+2]
       newStr += str[i]
    }
    return newStr
   
}

function zipZap(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'z' && str[i+2] === 'p'){
            str=str.replace(str[i+1], '')
        }
    }
    return str
}
//ew
function starOut(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i-1] !== '*' && str[i+1] !== '*')newStr += str[i]

    }
    return newStr.replaceAll(/\*/g, '')
     

}

function plusOut(str, word){
    let size = word.length

    for(let i = 0; i < str.length ; i ++){
        if (str.slice(i, size + i) === word){
           
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

function countYZ(str){

    let arr= str.split(' ')
    let cnt = 0
    for(let i of arr){
        if (i.at(-1).toLowerCase() === 'z' || i.at(-1).toLowerCase() === 'y') cnt ++
    }
    return cnt
}

function withoutString(base, remove){
    let newStr=''
    for (let i = 0; i < base.length; i++){
        if (base.slice(i, remove.length+i).toLowerCase() === remove.toLowerCase()){
            i += remove.length - 1    
            continue      
        }
        newStr += base[i]

    }
    return newStr
}

function equalIsNot(str){
    let isCnt = 0
    let notCnt = 0
    for(let i = 0; i < str.length; i++){
        if (str[i] === 'i' && str[i+1] === 's') isCnt ++
        else if (str[i] === 'n' && str[i+1] === 'o' && str[i+2] === 't') notCnt ++

    }
    return isCnt === notCnt

}

function gHappy(str){
    let flag = false
    for(let i = 0; i < str.length; i ++){
        if (str[i] === 'g'){
            if(i > 0 && str[i-1] === 'g'|| i > str.length && str[i+1] === 'g') flag = true
            else if(i > 0 && str[i-1] !== 'g'|| i > str.length && str[i+1] !== 'g') flag = false 
           
        }
    }
    return flag 

}

function countTriple(str){
    let cnt = 0
    for (let i = 0; i < str.length-2; i ++){
        if (str[i] === str[i+1] && str[i+1] === str[i+2]) cnt ++

    }
    return cnt 
}

function sumDigits(str){
    let sum =0
    for (let i of str){
        if (/[0-9]/.test(i)) sum += Number(i)
    }
    return sum
}

function sameEnds(str){

    let half = str.length % 2 === 0 ? str.length / 2: Math.floor(str.length / 2)
    while (half !== 0){
        if( (str.slice(0, half) === str.slice(-half) ) && (str[half-1] === str[str.length - half] && (half === str.length / 2 || half === Math.floor(str.length / 2)))) return str[0]
        else if (str.slice(0, half) === str.slice(-half)) return str.slice(0, half)
        else half -= 1
    }
    return ''

}

function maxBlock(str){
    let left = 0
    let right = 1
    let cnt = 0
    if (str.length === 0) return 0
    if (str.length === 1) return 1
    while (right !== str.length ){
        if (str[left] === str[right]){
            
            cnt = Math.max(cnt, right+1 - left)
            right ++
        
        } else if (str[left] !== str[right] ){
            cnt = Math.max(cnt, right - left)
            left = right
            right ++
        }

    }
    return cnt 
}

function sumNumbers(str){
    let total = 0
    let arr = str.split(/[a-z\s]/i)
    for (let i of arr){
        if (/[0-9]/.test(i)) total += Number(i)
    }
    return total
}

function notReplace(str){
    let empty = ''
    for (let i = 0; i < str.length; i ++){
        if (str[i] === 'i' && str[i+1] === 's' ){
            if( ! (/[a-z]/i.test(str[i-1]) && /[a-z]/i.test(str[i+2]))){
                empty += 'is not'
            }
        }else{
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
function maxSpan(nums){
    let max = 1
    for(let i = 0; i < nums.length-1; i ++){
        for(let j = i + 1; j < nums.length; j++ ){
            if (nums[i] === nums[j]){
                max = Math.max(max, j - i + 1)
            }
        }
    }
    return max

}
//maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function fix34(nums){
    let j = 0

    for (let i = 0; i < nums.length; i ++){
      
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



function scoreIncreasing(nums){
    for(let i = 0; i < nums.length; i ++){
        if (nums[i] > nums[i+1]) return false
    }
    return true
}

function scores100(nums){
    for(let i = 0; i < nums.length; i ++){
        if (nums[i] === 100 && nums[i+1] === 100) return true
    }
    return false
}

