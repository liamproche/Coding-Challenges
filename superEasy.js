// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

const problem = x => x === String(x) ? "Error" : x * 50 + 6

console.log(problem('10'))