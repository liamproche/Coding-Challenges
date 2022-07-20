// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = nums => {
    const obj = {}
    for (let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num]++
        }
    }
    return parseInt(Object.keys(obj).find(key => obj[key] === 1))
};

console.log(singleNumber([1]))

//define an empty obj

//loop through the nums arr using a for of loop defining num

//if !obj[num]
    //obj[num] = 0
    //else
        // obj[num] += 1
        // return getKeyByValue(obj, 0)