export class Actions {

    static visitUrl(url){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.startsWith('www') || url.startsWith('https://')){
                    resolve('URL ivisited successfully')
                 
                }else reject('wrong URL')
            },1000)
        

        })
    }

    static login(username, password){
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if(username === 'TechGlobal' && password === 'Test1234') resolve('Logged in successfully')
                else reject('wrong credentials')

            },3000)


        })
    }

    static validateTitle(title){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(title) resolve("Title validated successfully")
                else reject('Wrong title')


            },500)



        })
    }
   
}








