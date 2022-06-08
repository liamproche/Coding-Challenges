// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    const str = text.toLowerCase()
    const obj = {}
    let duplicates = 0
    for(char of str){
        if(!obj[char]){
            obj[char] = 1
        }
        else{
            obj[char]++
        }
    }
    for(key in obj){
        if(obj[key] > 1){
            duplicates++
        }
    }
    return duplicates
}

console.log(duplicateCount('aabBcde'))


//define an empty object

//loop through the string and create a key/value pair for every character in the str
    //if obj doesn't have the key for the letter --> create it and set it's value to 1
    //if obj does have that key, increment the value by one

//define a variable to hold number of duplicates
//loop through the key/value pairs
    //if value > 1 increment numOfDuplicates variable by one

//return numOfDuplicates