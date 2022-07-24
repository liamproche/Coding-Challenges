const { expect } = require("chai")
const { plusOne } = require("../addOne")

describe("the plusOne function", function (){
    it("should add one to the last digit of an array if the digit provided is less than 9 ", function(){
        const result = plusOne([1, 2, 3])
        expect(result).to.eql([1, 2, 4])
    })
    it("should add a digit to the array if the only digit in the array is 9", function(){
        const result = plusOne([9])
        expect(result).to.eql([1,0])
    })
    it("should work with 4 digits", function(){
        const result = plusOne([4, 3, 2, 1])
        expect(result).to.eql([4, 3, 2, 2])
    })
    it("should work when digits length is longer than 16 characters", function(){
        const result = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
        expect(result).to.eql([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4])
    })
})


