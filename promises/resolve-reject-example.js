function connetToDB(){
    return new Promise((resolve, reject) =>{
        const dbUp = true 
        setTimeout(() => {
            if(dbUp) resolve('DB Connection is gooooood')
            else reject('DB connection is Down')
        },3000)



    })
}

function getData(){
    return new Promise((resolve, reject) =>{
        const dataAvailable = true 
        setTimeout(() => {
            if(dataAvailable) resolve('DB data is here')
            else reject('DB data not found')
        },1500)



    })
}

function useData(){
    return new Promise((resolve, reject) =>{
        const usingData = true 
        setTimeout(() => {
            if(usingData) resolve('Data us USED')
            else reject('Data is NOT used ')
        },500)



    })
}

function test1(){
    connetToDB()
    .then((data) =>{
        console.log(data)
        
        getData()
        .then((data) =>{
            console.log(data)

            useData()
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    })

    .catch((err) =>{
     console.log(err)
    })
}

function test2(){
    connetToDB()
    .then(() => getData())
    .then(() => useData())
    .catch(err => console.log(err))
}


async function test3(){
    try{
    await connetToDB()
    await getData()
    await useData()
    }
    catch(err){
        console.log(err)
    }
    
}


test3()