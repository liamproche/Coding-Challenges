// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    const lowerCase = s.toLowerCase().split('')
    const alphaNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let i = 0
    while(i < lowerCase.length){
        if(!alphaNumeric.includes(lowerCase[i])){
            lowerCase.splice(i, 1)
        }
        else{
            i++
        }
    }
    const spacesRemoved = lowerCase.filter(item => item !== " ")
    console.log(lowerCase)
    if(spacesRemoved.join("") === [...spacesRemoved].reverse().join("")){
        return true
    }
    return false
};


console.log(isPalindrome("......a....."))


//define a variable to convert all string characters to lowercase and convert to an arr

//define an arr to hold all alphanumeric characters

//loop through lowercase using a traditional for loop checking if character is present in alphanumeric arr

//if it is not present splice the arr at i removing one element

//define a variable to hold reverse of the lowercase arr

//if str === reverse 
    //return true

//else return false