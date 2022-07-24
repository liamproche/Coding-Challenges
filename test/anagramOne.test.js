const { expect } = require("chai")
const { isAnagram } = require("../anagramOne")

describe("the isAnagram function", function (){
    it("should return true if both arguments have the same letters appearing the same number of times", function(){
        const result = isAnagram("anagram", "nagaram")
        expect(result).to.be.eq(true)
    })
    it("should return false if the arguments do not contain the same letters", function(){
        const result = isAnagram("car", "cat")
        expect(result).to.be.eq(false)
    })
    it("should return false if the arguments have different numbers of the same letters", function(){
        const result = isAnagram("anagram", "nagaarram")
    })
    it("should ignore letter case", function(){
        const result = isAnagram("Cat", "Tac")
        expect(result).to.be.eq(true)
    })
    it("should ignore white spaces", function(){
        const result = isAnagram("ana  gra  m","nagaram", function(){
            expect(result).to.be.eq(true)
        })
    })
})