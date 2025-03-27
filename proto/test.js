const Book = require ('./Book')
const Author = require ('./Author')


const book1 = new Book('Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768)
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973)

let books = [book1, book2, book3]

const author1 = new Author('George R. R.', 'Martin','United States')

//console.log(author1.getFullName())

// for(let i of l){
//     console.log(i)
// }

console.log( books.reduce((acc, curr) => curr.page > acc.page ? curr: acc).title)



