// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.


function capitalize(s){
   let evens = ''
   let odds = ''
   for(let i = 0; i < s.length; i++){
    if(i % 2 === 0){
        evens += s[i].toUpperCase()
    }
    else{
        evens += s[i].toLowerCase()
    }
   }
   for(let i = 0; i < s.length; i++){
    if(i % 2 !== 0){
        odds += s[i].toUpperCase()
    }
    else{
        odds += s[i].toLowerCase()
    }
   }
   return [evens, odds]
};

console.log(capitalize('abcde'))

//define a variable to hold even-indexed capitals & set to an empty string

//define a variable to hold odd-indexed capitals & set to an empty string

//iterate over the given str using a standard for loop
    //if i % 2 === 0 
        //evens += str[i].toUpperCase()
    //else
        //evens += str[i].toLowerCase()

//repeat process for odds variable

//return [evens, odds]
