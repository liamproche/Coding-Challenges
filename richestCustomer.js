// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = (accounts) => {
    let highest = 0
    for(a of accounts){
        let sum = a.reduce((a, b) => a + b)
        if(sum > highest){
            highest = sum
        }
    }
    return highest
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))

//define a variable to hold the highest and set it at 0

//loop through accounts summing each arr
    //define a variable to hold sum of each arr
        //if sum of arr > highest, highest = sum

//return highest
