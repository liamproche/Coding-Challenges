// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = s => {
    const arr = s.split(' ')
    while(arr[arr.length - 1].length === 0){
        arr.pop()
    }
    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("luffy is still joyboy"))

//split str into arr

//return arr[arr.length - 1].length