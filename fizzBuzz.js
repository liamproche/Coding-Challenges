// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = n => {
    const arr = []
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz")
        }
        else if(i % 3 === 0){
            arr.push("Fizz")
        }
        else if(i % 5 === 0){
            arr.push("Buzz")
        }
        else{
            arr.push(i.toString())
        }
    }
    return arr
}

console.log(fizzBuzz(15))

//define a variable to hold an empty arr

//loop through instances of n using a standard for loop

//if instance is divisible by 3 & 5, arr.push(Fizzbuzz)

//else if instance is divisible by 3, arr.push(Fizz)

//else if instance is divisible by 5, arr.push(Buzz)

//else arr.push String(i)

//return arr
