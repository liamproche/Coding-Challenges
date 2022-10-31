//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid=(str)=>{
    let valid = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" && str[i + 1] === ")"){
            valid++
            i++
        }
        else if(str[i] === "[" && str[i + 1] === "]"){
            valid++
            i++
        }
        else if(str[i] === "{" && str[i + 1] === "}"){
            valid++
            i++
        }
    }
    if(valid === str.length / 2){
        return true
    }
    return false
}
console.log(isValid('{[]}'))

//iterate over the string using a standard for loop

//let char = str[i]

//let nextChar = str[i + 1]

//["(", ")"]
