const buttonEl = document.getElementById('btn')
const inputEL = document.getElementById('inp')



buttonEl.addEventListener('click',(event) =>{
    console.log('Value:', inputEL.value)
})



// inputEL.addEventListener('input', () => {
//     console.log('Value:', inputEL.value)
// })


const myDiv = document.getElementById('myDiv')
const stopButton = document.getElementById('stop')

myDiv.addEventListener("mousemove",myFunction)

stopButton.addEventListener('click', () => {
    removeHandler()
})

function removeHandler(){
    myDiv.removeEventListener("mousemove", myFunction)
}

function myFunction(){
    console.log('Math random', Math.random())
}