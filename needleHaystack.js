// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => !haystack.includes(needle) ? -1 : haystack.indexOf(needle)

console.log(strStr("leetcode", "leeto"))


//if haystack.includes(needle)
    //console.log(true)

//console.log(-1)