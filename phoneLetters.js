// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

var letterCombinations = function(digits) {
    const output = []
    const keypad = {
        2 : ["a", "b", "c"],
        3 : ["d", "e", "f"],
        4 : ["g", "h", "i"],
        5 : ["j", "k", "l"],
        6 : ["m", "n", "o"],
        7 : ["p", "q", "r", "s"],
        8 : ["t", "u", "v"],
        9 : ["w", "x", "y", "z"]
    }

};

//define a variable to hold the output set it to an empty arr
//define an object for the keypad
    //set each numerical value equal to an arr of the letters created
//define a variable called currentDigitIndex and set it to 0
//define a variable to hold currentDigit and set it to digits[currentDigitIndex]


