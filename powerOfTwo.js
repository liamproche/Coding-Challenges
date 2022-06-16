function powersOfTwo(n){
    const arr = []
    for (let i = 0; i <= n; i++){
        arr.push(2 ** i)
    }
    return arr
}

console.log(powersOfTwo(1))

//define an empty arr to hold the output

//run a traditional for loop where i <= n

//arr.push n ** i

//return arr