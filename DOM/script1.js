console.log('Hi Mohamad Hishmeh I am better than You in CupPong')


//console.log('Global', global)

if(typeof(window) !== 'undefined'){
    console.log("WINDOW::::", window)

}else{
    console.log('GLOBAL', global)
}

//const alertAns=window.alert('ALERT!! my gradma do vodoo')
//console.log('alertAns',alertAns)//undefined

/*
prompt()
provide message click ok else click cancel get null
no message ok = empty str
*/

const promptAns = prompt('would you like to hear from us? (yes) OH WOW! leave your email!')
console.log('prompotAns',promptAns)

// confrim = question 
const confirmAns = confirm('Are you a student?')
console.log('confirmAns', confirmAns)

//localStorage() 


const storage = localStorage.length
console.log('storage', storage)

localStorage.setItem('userName', 'abc123')
console.log('storageLen', storage)

const userName = localStorage.getItem('userName')
console.log('userName', userName)


localStorage.removeItem('userName')
console.log('userNmae', userName)

localStorage.setItem('userName', 'HI')
localStorage.setItem('userName', 'BYE')
localStorage.clear()


localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'})

localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email: 'alex@gmail.com'}))


const userInfo = localStorage.getItem('userInfo')
const userInfoObj = JSON.parse(localStorage.getItem('userInfo'))

console.log(userInfo)
console.log(userInfoObj)