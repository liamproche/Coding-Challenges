// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    const obj = {}
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num]++
        }
    }
    for(let num in obj){
        if(obj[num] === 1){
            return Number(num)
        }
    }
 }

console.log(singleNumber([0,1,0,1,0,1,99]))


//define an empty obj

//iterate over the arr using a for...of loop

//if key value pair doesn't exist in obj create it and set it's value to 1
    //otherwise increment the value by 1

//return key where the value is equal to 1