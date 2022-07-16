// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains
// the whole word "English".

// The order of characters is important -- a string
// "abcEnglishdef" is correct but "abcnEglishsef" is not
// correct.

// Upper or lower case letter does not matter -- "eNglisH" is
// also correct.

// Return value as boolean values, true for the string to
// contains "English", false for it does not.

function spEng(sentence){
    let str = ''
    for (char of sentence){
        if(char.toLowerCase() === 'e' || char.toLowerCase() === 'n' || char.toLowerCase() === 'g' || char.toLowerCase() === 'l' || char.toLowerCase() === 'i' || char.toLowerCase() === 's' || char.toLowerCase() === 'h'){
            str += char.toLowerCase()
        }
    }
    if (str.includes('english')){
        return true
    }
    return false
}

console.log(spEng('abcdnEglish'))

//define a variable to pass the letters to and set it to an empty string

//loop through the given sentence using a for of loop defining char
    //if char.toLowerCase === e || char.toLowercase === n || char.toLowerCase === g || char.toLowerCase === l || char.toLowerCase === i || char.toLowerCase === s || char.toLowerCase === h
        //str += char.toLowerCase
//if str.includes(english)
    //return true
//return false