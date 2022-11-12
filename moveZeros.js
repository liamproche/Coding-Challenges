// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            console.log(nums[i])
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};


console.log(moveZeroes([0,0,1]))

//iterate through the arr using a standard for loop

//if num === 0

//arr.splice(i, 1)
//arr.push(0)
