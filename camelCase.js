//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(str) {
    let newStr = ""
    for(char of str){
        if(char === char.toLowerCase()){
            newStr += char
        }
        else{
            newStr += ` ${char}`
        }
    }
    return newStr
}

console.log(solution('camelCasing'))

//define a new string to hold the result

//iterate through the string checking if lowercase or uppercase
    //if letter is lowercase, newstr += letter
    //else newstr += <space> & letter

//return the new str