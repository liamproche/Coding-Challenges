
// Remove all exclamation marks from the end of sentence.

function remove (str) {  
    const arr = str.split('')
    for(let i = arr.length; i > 0; i--){
        if(arr[arr.length - 1] === '!'){
            arr.pop()
        }
    }
    return arr.join('')
}

console.log(remove('!Hi!!!'))

//split the string into an arr

//if arr[arr.length -1] === '!'
    //arr.pop
//return arr