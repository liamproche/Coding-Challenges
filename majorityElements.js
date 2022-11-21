// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
    const obj = {}
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1
        }
        else{
            obj[num]++
        }
    }
    let highest = obj[Object.keys(obj)[0]]
    for(let num in obj){
        if(obj[num] > highest){
            highest = obj[num]
        }
    }
    for(let num in obj){
        if(obj[num] === highest){
            return Number(num)
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))


//define an empty object

//iterate through nums using a for...of loop

//if !obj[num]
    //obj[num] === 1

//else
    //obj[num]++

//define a variable to hold highest and set it to first key value pair of obj

//use a for in loop to iterate through obj

//if obj[num] > highest, highest === obj[num]

//return highest