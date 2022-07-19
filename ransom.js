// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
    const arr = magazine.split('')
    for(letter of ransomNote){
        if(!arr.includes(letter)){
            return false
        }
        else{
            arr.splice(arr.indexOf(letter), 1)
            console.log(arr)
        }
    }
    return true
};

console.log(canConstruct('aa', 'ab'))

//loop through the letters in the ransom note
    //if !magazine.includes(letter)
        //return false
    //magazine.splice(magazine.indexOf(letter))
    //return true

