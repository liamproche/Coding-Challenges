// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    const arr = s.toLowerCase().split('')
    for (let i = 0; i < t.length; i++){
        if(arr.includes(t[i].toLowerCase())){
            arr.splice(arr.indexOf(t[i]), 1)
        }
        else{
            return false
        }
    }
    if(arr.length === 0){
        return true
    }
    return false
};

module.exports = {
    isAnagram
}

//split s into an arr
//iterate over t using a standard for loop
    //if arr.includes t[i] 
        //arr.splice(i, 1)
    //else
        //return false
//if arr.length = 0
    //return true
//return false