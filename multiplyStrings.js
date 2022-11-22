// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

var multiply = function(num1, num2) {
    const firstNum = []
    const secondNum = []
    const obj = {
        1 : 1,
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        0 : 0
    }
    for(let num of num1){
        firstNum.push(obj[num])
    }
    for(let num of num2){
        secondNum.push(obj[num])
    }
    return String(firstNum.join('') * secondNum.join(''))
};

console.log(multiply("123456789", "987654321"))

//define a variable to hold firstNum -> set it to an empty arr

//define a variable to hold secondNum -> set it to an empty arr

//define an obj to hold values of the string nums

//iterate over num1 pushing the value from the obj into firstNum arr

//iterate over num2 pushing value from obj into secondNum arr

//return firstNum.join('') multiply secondNum.join('')