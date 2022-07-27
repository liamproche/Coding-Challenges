// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string

const longestCommonPrefix = strs => {
    const prefix = strs[0].split('')
    for(let i = 1; i < strs.length; i++){
        let str = strs[i]
        for(let j = 0; j < prefix.length; j++){
            if(str[j] !== prefix[j]){
                prefix.splice(j)
            }
        }
    }
    return prefix.join('')
};

module.exports = {
    longestCommonPrefix
}

// longestCommonPrefix(["flower", "flow", "flight"])

//define a variable to hold prefix and set it to an arr of the first str

//iterate over the strs arr starting at the second element
    //iterate over the str
        //if prefix[j] !== str[j]
            //prefix.splice(j, 1)
//console.log(prefix)