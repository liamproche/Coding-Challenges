// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN

function remainder(n, m){  
    if(n === 0 || m === 0){
        if(n < 0){
            return m % n
        }
        else if(m < 0){
            return n % m
        }
        else{
            return NaN
        }
    }
    else if(n < m){
        return m % n
    }
    return n % m
}

console.log(remainder(0, -1))

//if n < m
    //return m % n
//return n % m

