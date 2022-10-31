const { expect } = require("chai")
const { sumTarget } = require("../sumTarget")

describe("the sumTarget function", function(){
    it("should return the indices of the numbers that sum to the target", function(){
        const result = sumTarget([2, 7, 11, 15], 9)
        expect(result).to.eql([0, 1])
    })
            
    it("should only list the indices of the numbers that sum to target once", funciton(){
        const result = sumTarget([1, 2, 3, 4, 5], 5)
        expect(result).to.eql([0, 3, 1, 2])
    })



})