// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.


//1000 + 900 + 90 + 4

const romanToInt = (numerals) => {
    const values = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    const arr = []
    const arrToSum = []
    for (char of numerals){
        arr.push(values[char])
    }
    if(arr.length === 1){
        return arr[0]
    }
    else{
        for(let i = 0; i < arr.length; i++){
            let currNum = arr[i]
            let nextNum = arr[i + 1]
            if(currNum === 1 && nextNum === 5 || currNum === 1 && nextNum === 10){
                arrToSum.push(currNum + nextNum - 2)
                i++
            }
            else if(currNum === 10 && nextNum === 50 || currNum === 10 && nextNum === 100){
                arrToSum.push(currNum + nextNum - 20)
                i++
            }
            else if(currNum === 100 && nextNum === 500 || currNum === 100 && nextNum === 1000){
                arrToSum.push(currNum + nextNum - 200)
                i++
            }
            else{
                arrToSum.push(arr[i])
            }
        }
    }
    console.log(arr)
    console.log(arrToSum)
    return arrToSum.reduce((a, b) => a + b)
}

console.log(romanToInt("MCMXCIV"))

//define an object to hold the values of roman characters with the values defined integers

//define a variable to hold integers of numerals and set to an empty arr

//loop through the numerals pushing obj value into nums variable

//if arr.length === 1
    //return arr[0]

//else loop through the arr using standard for loop
    

//if arr[0] === 1 
        //return sum the arr - 2
    //else 
        //return sum the arr




