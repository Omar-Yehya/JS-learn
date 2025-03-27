const Player = require("./player");


class HeroPlayer extends Player{
    constructor(nickName, score){
        super(nickName, score)
    }
    heal(player){
        player.score += 1
    }
}


module.exports = HeroPlayer