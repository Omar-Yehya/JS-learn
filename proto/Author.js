class Author{
    constructor(fname, lname, country, books){
          this.fname = fname
          this.lname = lname
          this.country = country
          this.books = books
    }
    getFullName(){
          return (`${this.fname} ${this.lname}`)
    }
    getBooks(){
          return this.books
    }
}




module.exports = Author

