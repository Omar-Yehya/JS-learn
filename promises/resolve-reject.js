function connectToServer(){
    return new Promise((reolve, reject) => {
        const serverUp = false
        if (serverUp) resolve('Server connection is complete')
        else reject('Error server is down')

    })
}

connectToServer()
.then((data) => {
    console.log(data)
})

.catch((failure) => {
    console.log(failure)
})