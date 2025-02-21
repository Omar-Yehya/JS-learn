
/**
 * returns a random number between teo numbers 
 * @param {*} start starting number -inclusive 
 * @param {*} end ending number     -inclusive 
 */


function getRandomNumber(start,end){
    max=Math.max(start,end)
    min=Math.min(start,end)

    return Math.floor(Math.random()*(max-min+1)+min)


}

module.exports.getRandomNumber= getRandomNumber
