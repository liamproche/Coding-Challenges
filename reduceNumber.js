// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = num => {
    let steps = 0
    while(num > 0){
        if(num % 2 === 1){
            num -= 1
            steps++
        }
        else{
            num = num / 2
            steps++
        }
    }
    return steps
};

console.log(numberOfSteps(123))

//define a variable to hold steps & set it to 0

//use a while loop set it to num > 0
    //if num % 2 === 1
        //num -= 1
        //step++
    //else 
        //num = num / 2
        //step++

//return steps
