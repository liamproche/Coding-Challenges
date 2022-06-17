// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

var repeatIt = function(str, n) {
    const arr = []
    if(String(str) !== str){
        return "Not a string"
    }
    for(let i = 0; i < n; i++){
        arr.push(str)
    }
    return arr.join('')
}

console.log(repeatIt('hi', 5))

//start with the edge case 
    //define a variable to hold the output set it to an empty arr
    //if String(str) !== str)
        //return not a string
    //run a traditiona for loop, i <= num
        //arr.push(str)

    //return arr.join()