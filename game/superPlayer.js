const Player = require("./player");


class SuperPlayer extends Player{
    constructor(nickName, score){
        super(nickName, score)
    }

    superAttack(player){
        this.score += 2
        player.score -= 2
    }

    
}





module.exports = SuperPlayer