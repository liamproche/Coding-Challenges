// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

var sumTarget = function(candidates, target) {
    const output = []
    for (let i = 0; i < candidates.length; i++){
        let currNum = candidates[i]
        for(let j = 1; j < candidates.length; j++){
            let nextNum = candidates[j]
            if(currNum + nextNum === target){
                output.push(i)
                output.push(j)
            }
        }
    }
    return output
};

console.log(sumTarget([1, 2, 3, 4, 5], 5))

//output should be [1, 3, 1, 4]

// module.exports = {
//     sumTarget
// }

//define a variable to hold the output and set it to an empty arr


//define a variable to hold number of iterations and set it to 0


//return the output


