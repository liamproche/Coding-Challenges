// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (str) {  
    const obj = {}
    for (char of str){
        if(!obj[char]){
            obj[char] = 1
        }
        else{
            obj[char] += 1
        }
    }
    return obj
}

console.log(count('aaabccccc'))

//define an empty obj to hold the output

//loop through the characters in the str using afor of loop and defining char

//if !obj.char{
    //obj.char = 1
//}
//else{
    //obj.char += 1
//}
//return obj