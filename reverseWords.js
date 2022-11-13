// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


const reverseWords = (s) => {
    const arr = []
    const nextArr = s.split(' ')
    for(let word of nextArr){
        if(word != ''){
            arr.unshift(word)
        }
    }
    return arr.join(' ')
};

console.log(reverseWords("a good   example"))

//define an empty arr

//split words into another arr at the space

//loop through the second arr pushing only the words (not the spaces) into the first array

//reverse the first arr

//return arr.join(' ')



