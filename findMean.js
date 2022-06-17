// Find the mean (average) of a list of numbers in an array.

const findAverage = nums => nums.reduce((a,b)=>a+b) / nums.length

console.log(findAverage([1,2,3]))
