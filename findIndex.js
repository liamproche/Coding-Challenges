// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) =>{
    if(target > nums[nums.length - 1]){
        return nums.length
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target || nums[i] > target){
            return i
        }
    }
};

console.log(searchInsert([1,3,5,6], 7))

//iterate over arr using a standard for loop

//if nums[i] === target

//else if nums[i] > target
    //return i - 1

//else
    //return i + 1