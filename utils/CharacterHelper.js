

function isDigit(char){
  return /\d/.test(char)
}






function isLowerCase(let){
    return /[A-Z]/.test(let)
}


function isLetter(char){
    return /^[a-z]$/i.test(char)

}


function isSpace(char){
    return /\s/.test(char)
}

function isDigitOrLetter(char){
    return /^[0-9a-z]$/i.test(char)
}



function isSpecial(char){
    return (!(isDigitOrLetter(char) || isSpace(char)))
}


function isVowel(char){
    return /^[aeiou]$/i.test(char)
}

//module.exports.isDigit = isDigit;

module.exports.CharacterHelper={
    isDigit,
    isLowerCase,
    isLetter,
    isSpace,
    isSpecial,
    isVowel
};
