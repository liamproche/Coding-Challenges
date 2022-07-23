// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral.

var intToRoman = function(num) {
    let output = []
    let position = 1
    let multiplier = 1
    const numStr = String(num)
    const numeralObj = {
        1 : "I",
        2 : "II",
        3 : "III",
        4 : "IV",
        5 : "V",
        6 : "VI",
        7 : "VII",
        8 : "VIII",
        9 : "IX",
        10 : "X",
        20 : "XX",
        30 : "XXX",
        40 : "XL",
        50 : "L",
        60 : "LX",
        70 : "LXX",
        80 : "LXXX",
        90 : "XC",
        100 : "C",
        200 : "CC",
        300 : "CCC",
        400 : "CD",
        500 : "D",
        600 : "DC",
        700 : "DCC",
        800 : "DCCC",
        900 : "CM",
        1000 : "M"
    }
    for (let i = numStr.length - position; i >= 0; i--){
        let currentNum = parseInt(numStr[i] * multiplier)
        if(currentNum !== 0 && multiplier < 1000){
            output.unshift(numeralObj[currentNum])
            multiplier *= 10
            position++
        }
        else if(multiplier >= 1000){
            const thousands = currentNum / 1000
            for(let i = 0; i < thousands; i++){
                output.unshift("M")
            }
        }
        
        else{
            multiplier *= 10
            position++
        }
    }
    return(output.join(''))
};

module.exports = {
    intToRoman
}


//define a variable to hold outputNumerals, set it to an empty arr
//define a variable to hold the num as a str
//define an obj to hold key value pairs of numerals and include all roman numeral --> arabic : numeral
//define a variable to hold position set it to 1
//define a variable to hold multiplier set it to 1
//iterate backwards through the str using a standard for loop
    //onesPosition = parseInt(str[str.length - position]) * multiplier
    //outputNumerals.shift obj[str[i]]
    //position++
    //multiplier = multiplier * 10

