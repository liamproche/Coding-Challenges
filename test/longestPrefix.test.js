const { expect } = require("chai")
const { longestCommonPrefix } = require("../longestPrefix")


//function provided with help from Sergey at https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeArrWithCommonPrefix(length) {
    const arr = []
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
      arr.push('br' + characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return arr;
}

function makeArrWithoutCommonPrefix(length) {
    const arr = []
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
      arr.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return(arr);
}

describe("the longestPrefix function", function (){
    it("should return the longest common prefix when the second element is shorter than the first", function(){
        const result = longestCommonPrefix(["flower", "flow", "flight"])
        expect(result).to.be.eq("fl")
    })
    it("should return the longest common prefix when the first element is shorter than the second", function(){
        const result = longestCommonPrefix(["flow", "flower", "flight"])
        expect(result).to.be.eq("fl")
    })
    it("should return an empty string if there is no common prefix", function(){
        const result = longestCommonPrefix(["dog","racecar","car"])
        expect(result).to.be.eq("")
    })
    it("should return the first letter if that is the only common prefix of all elements", function(){
        const result = longestCommonPrefix(["gary", "grey", "goose", "gamble", "greet", "god"])
        expect(result).to.be.eq("g")
    })
    it("should return the full string if there is only one element in the array", function(){
        const result = longestCommonPrefix(["this is the full string"])
        expect(result).to.be.eq("this is the full string")
    })
    it("should return the longest common prefix with an array of 200 items", function(){
        const result = longestCommonPrefix(makeArrWithCommonPrefix(200))
        expect(result).to.be.eq("br")
    })
    it("should return an empty string with an array of 200 items and no common prefix", function(){
        const result = longestCommonPrefix(makeArrWithoutCommonPrefix(200))
        expect(result).to.be.eq("")
    })
    it("should return an empty string if the first element in the array is an empty string", function(){
        const result = longestCommonPrefix(["", "flutter", "filng"])
        expect(result).to.be.eq("")
    })
    it("should return an empty string if the last element in the array is an empty string", function(){
        const result = longestCommonPrefix(["flutter", "filng", ""])
        expect(result).to.be.eq("")
    })
    it("should return an empty string if the middle element in the array is an empty string", function(){
        const result = longestCommonPrefix(["flutter", "", "filng"])
        expect(result).to.be.eq("")
    })
})