// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const isPalindrome = s => {
    const lowercase = s.toLowerCase()
    const arr = lowercase.split(' ')
    const reversed = arr.reverse()
    if(arr === reversed){
        return true
    }
    return false
};

console.log(isPalindrome())

//convert the str to lowercase

//split the string into an arr at the spaces

//reverse the arr

//if arr === reversed arr
    //return true

    //return false