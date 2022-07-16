// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN

function remainder(n, m){
    if(n > 0 && m > 0){
        if(n === 0 || m === 0){
            return NaN
        }
        else if(n < m){
            return m % n
        }
        return n % m
    }
    else{
        return m % n
    }
}

console.log(remainder(17, 5))

//if n < m
    //return m % n
//return n % m

