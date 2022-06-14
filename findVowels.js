// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4]

function vowelIndices(word){
    const arr = []
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === 'a' || word[i].toLowerCase() === 'e' || word[i].toLowerCase() === 'i' || word[i].toLowerCase() === 'o' || word[i].toLowerCase() === 'u' || word[i].toLowerCase() === 'y'){
            arr.push(i + 1)
        }
    }
    return arr
}

console.log(vowelIndices('Super'))

//define an arr to hold the vowel indicies

//iterate over the word using traditional for loop

//if letter equals a vowel
    //push i + 1 into the arr

//return the arr