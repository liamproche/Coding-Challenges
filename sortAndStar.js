// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    if(s){
        const arr = s.toLowerCase().split(" ")
        let output = ""
        let sortedArr = arr.sort()
        console.log(sortedArr)
        for(char of sortedArr[0]){
            output += char + "***"
        }
    return output.slice(0, -3)
    }
    else{
        return "What goes here?"
    }
}

console.log(twoSort(""))

//if 