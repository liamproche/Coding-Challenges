// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = (x) => {
    if(x < 0){
        return false
    }
    const arr = String(x).split('')
    return  Number(arr.reverse().join('')) === x
};

console.log(isPalindrome(-121))