// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let longest = String(array[0])
    const strArr = array.map(n => String(n))
    for(str of strArr){
        if(str.length > longest.length){
            longest = str
        }
    }
    return Number(longest)
}

findLongest([1, 2, 3, 40])

//define a variable to hold the output number and set it to a str of the first number

//map the arr changing the numbers to str

//iterate through the str arr
    //if str.length > output.length
        //output = str

//return number(output)