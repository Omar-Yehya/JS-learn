const Player = require("./player");
const superPlayer = require("./superPlayer")
const heroPlayer = require("./heroPlayer")



const player1 = new Player('Player 1', 5)
const player2 = new Player('Player 2', 5)

const superPlayer1 = new superPlayer('Super Player', 3)
const heroPlayer1 = new heroPlayer ('Hero Player', 10)


player1.attack(player2)
player1.attack(superPlayer1)
superPlayer1.superAttack(player2)
superPlayer1.superAttack(player1)
superPlayer1.superAttack(heroPlayer1)
heroPlayer1.heal(player1)
heroPlayer1.heal(player2)
player1.attack(superPlayer1)
player2.attack(superPlayer1)
heroPlayer1.attack(superPlayer1)
player1.damage()
player2.damage()



console.log(player1.getInfo())
console.log(player2.getInfo())
console.log(superPlayer1.getInfo())
console.log(heroPlayer1.getInfo())