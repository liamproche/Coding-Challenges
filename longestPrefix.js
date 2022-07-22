// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string

const longestCommonPrefix = strs => {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++){
        let str = strs[i]
        for(let j = 0; j < str.length; j++){
            let letter = str[j]
            if(prefix.includes(letter)){
                console.log("got it")
            }
            else{
                prefix.slice(j)
            }
        }
    }
    console.log(prefix)
};

longestCommonPrefix(["flower", "flow", "flight"])

//define a variable to hold the prefix and set it to the first str
//for let i = 1; i < str.length; i++
    //let str = strs[i]
    //for let j = 0; j < str.lengthl j++
        //let letter = str[j]
        //if !prefix.includes(letter)
            //prefix.subString(j)
//return the prefix variable