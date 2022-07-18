// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    let indices = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                indices.push(i)
                indices.push(j)
            }
        }
    }
    return indices
}



console.log(twoSum([3, 2, 3], 6))


//define a variable to hold indices set to an empty arr

//loop through the arr using a standard for loop stating on the first num of the arr
    //loop through arr using a nested for loop starting on the next number of the arr (i + 1)
        //if first number + next number === target
        //indices.push first number index
        //indices.push second number index

    //return indicies





