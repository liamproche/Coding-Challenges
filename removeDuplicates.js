// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    const elements = {}
    for (let num of nums){
        if(!elements[num]){
            elements[num] = 1
        }
        else{
            elements[num]++
        }
    }
    console.log(elements)
    for(let element in elements){
        if(elements[element] > 1){
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 4]))

//define an object to hold duplicates

//loop through the arr using a for of loop

//if !elements.number
    //elements.number = 1

//else element.num++

//loop through obj 
    //if element > 1
        //return true
    
    //return false