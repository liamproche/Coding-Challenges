function longestConsec(strarr, k) {
    let output = ''
    let longest = ''
    const Findlongest = (arr) =>{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
            if(arr[i].length > longest.length){
                longest = arr[i]
            }
        }
    }
        output += longest
    for (let i = 0; i < k; i++){
        Findlongest(strarr)
        strarr.filter(str=>str !== longest)
    }
    console.log(longest)
}

longestConsec(['zone', 'abigail', 'theta', 'form'])



//sort the arr by length of str
    //define a variable set to the sorted arr

//return the first k number of strings concoctonated together
    //define an empty str variable
    //run a for  loop where i <= k
        //add current str to emptystr variable

    //return the string variable