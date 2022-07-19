import test from "node:test";
const canConstruct = require("./ransom.js")

test("Tests canConstruct function from ransom.js", ()=>{
    expect(canConstruct("aa", "ab")).toBe(false)
})