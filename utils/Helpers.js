
// /**
//  * returns a random number between teo numbers 
//  * @param {*} start starting number -inclusive 
//  * @param {*} end ending number     -inclusive 
//  */



// class mathHelper {
//     static getRandomNumber(start, end) {
//         let max = Math.max(start, end)
//         let min = Math.min(start, end)

//         return Math.floor(Math.random() * (max - min + 1) + min)
//     }

// }

// module.exports = mathHelper



export class MathHelper {
    static getRandomNumber(start, end) {
        let max = Math.max(start, end);
        let min = Math.min(start, end);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}