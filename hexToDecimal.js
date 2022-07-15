// Complete the function which converts hex number (given as a string) to a decimal number.

// function hexToDec(hexString){
//     let decimalNumber = 0
//     const letters = {
//         A: 10,
//         B: 11,
//         C: 12,
//         D: 13,
//         E: 14,
//         F: 15
//     }
//     for(let i = hexString.length; i >= 0; i--){
//         let char = hexString[i]
//         if(!isNaN(Number(char))){
//             decimalNumber += Number(char) ** i
//         }
//         else{
//             decimalNumber += letters[char] ** i
//         }
//     }
//     console.log(decimalNumber)
// }


// hexToDec('FF')

function hexToDec(hexString){
    return parseInt(hexString, 16)
}

console.log(hexToDec("FF"))





//Define an object to hold letter values

//Define a variable to hold decimal set it to an empty str

//Loop through the hex string

//if Num(char) === Number, decimal.push(char)

//else decimal.push letterValues[char]

//return decimal