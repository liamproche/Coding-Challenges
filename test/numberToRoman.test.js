const assert = require("assert")
const { expect } = require("chai")
const { intToRoman } = require("../numberToRoman")

describe("the numberToRoman function", function(){
    it("should display numbers under 4 correfctly", function(){
        const result = intToRoman(3)
        expect(result).to.be.eq("III")
    })
    it("should display the number 4 correctly", function(){
        const result = intToRoman(4)
        expect(result).to.be.eq("IV")
    })
    it("should display the number 5 correctly", function(){
        const result = intToRoman(5)
        expect(result).to.be.eq("V")
    })
    it("should add additional I's for numbers 6-8", function(){
        const result = intToRoman(7)
        expect(result).to.be.eq("VII")
    })
    it("should display the number 9 correctly", function(){
        const result = intToRoman(9)
        expect(result).to.be.eq("IX")
    })
    it("should display the number 10 correctly", function(){
        const result = intToRoman(10)
        expect(result).to.be.eq("X")
    })
    it("should handle double-digit numbers larger than 10", function(){
        const result = intToRoman(59)
        expect(result).to.be.eq("LIX")
    })
    it("should handle triple-digit numbers lower than 500", function(){
        const result = intToRoman(409)
        expect(result).to.be.eq("CDIX")
    })
    it("should handle triple-digit numbers larger than 500", function(){
        const result = intToRoman(509)
        expect(result).to.be.eq("DIX")
    })
    it("should handle numbers larger than 1000 and lower than 2000", function(){
        const result = intToRoman(1503)
        expect(result).to.be.eq("MDIII")
    })
    it("should handle numbers larger than 2000 and less than 3000", function(){
        const result = intToRoman(2419)
        expect(result).to.be.eq("MMCDXIX")
    })
    it("should handle numbers larger than 3000 and less than 4000", function(){
        const result = intToRoman(3999)
        expect(result).to.be.eq("MMMCMXCIX")
    })
})