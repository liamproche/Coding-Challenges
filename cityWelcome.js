// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//THERE ARE SO MANY POSSIBLE EDGE CASES ON THIS ONE


function sayHello( name, city, state ) {
    let concoctedName = ''
    for(n of name){
        concoctedName += n + ' '
    }
    const trimmedName = concoctedName.slice(0, -1)
    return `Hello, ${trimmedName}! Welcome to ${city}, ${state}!`
}



console.log(sayHello(['John', 'Smith'], 'Pheonix', 'Arizona'))




//define a variable to hold the name set this to an empty str

//iterate through the name arr adding the individual name to the name variable
    //add name and space
    //remove the last space once all names added

//use interpolation to return the phrase