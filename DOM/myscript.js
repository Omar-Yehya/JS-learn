const promptAns = prompt("whats username")

if (promptAns){
    console.log(`Welcome ${promptAns}`)
}else throw new Error("Nothing shown")


const confirmAns = confirm("Do you want to continue")

if(confirmAns){
    window.alert("You have chosen to continue")
}else window.alert("You have chosen to cancel")

console.log(innerWidth)
console.log(innerHeight)




// setTimeout(() => {
//     window.location.reload()
// },10000)