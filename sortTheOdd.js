// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    const oddNums = []
    const evenNums = []
    const evenNumIndexes = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            oddNums.push(array[i])
        }
        else{
            evenNumIndexes.push(i)
            evenNums.push(array[i])
        }
    }
    const sortedOddNumsArr = oddNums.sort((a, b)=>a - b)
    for(let i = 0; i < evenNums.length; i++){
        sortedOddNumsArr.splice(evenNumIndexes[i], 0, evenNums[i])
    }
    return sortedOddNumsArr
}

console.log(sortArray([-8, -9, -2, -1]))


//define an arr to hold odds

//define an arr to hold evens

//define an arr to hold even indexes

//loop through given arr seperating out evens and odds into respective arrs and pushing indexes of evens into inde arr

//sort the odds arr

//loop though evens arr inserting each element into sortedOddsArr at the original indexes

//return the sorted oddNumsArr with the evens inserted
