function getMiddle(s){
    let middle = ""
    if(s.length % 2 === 1){
        middle += s[(s.length - 1) / 2]
    }
    else{
        middle += s[Math.floor((s.length - 1) / 2)]
        middle += s[Math.ceil((s.length - 1) / 2)]
    }
    return middle
}

getMiddle('four')

//define a variable to hold the ouput

//find out if str length is odd or even

//if string length is odd 
    //return the middle character
    //middle character would be (str.length - 1) / 2
    //push the above into the output variable

//else return the 2 middle characters
    //push Math floor (str.length -1) / 2
    //push Math ceil (str.length -1 / 2

//return the ouput

    "four"