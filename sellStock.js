// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let profit = 0
    let buy = prices[0]
    for(let i = 1; i < prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i]
        }
        let profitCheck = prices[i] - buy
        if(profitCheck > profit){
            profit = profitCheck 
        }
    }
    return profit
};


console.log(maxProfit([2, 4, 1]))

//define a variable to hold profit and set it to 0
//define a variable to hold the buy price and set it as the first num in the arr
//loop through the arr starting on the second number
    //if buy > prices[i] 
        //buy = prices[i]
    
    //define a variable to check the current price against the buy price (profitCheck)
    //if profitCheck - buy > profit
        //profit = profitCheck - buy

//return the profit

// Lots of help on this one from https://relatablecode.com/javascript-leetcode-best-time-to-buy-and-sell-stock

