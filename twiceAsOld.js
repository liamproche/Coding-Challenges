// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


const twiceAsOld = (dadYearsOld, sonYearsOld) => dadYearsOld > sonYearsOld * 2 ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 - dadYearsOld

console.log(twiceAsOld(55, 30))

//const doubleAge = sonYearsOld * 2

//if dadYearsOld > double years old
    //return dadYearsOld - doubleYearsOld

//return doubleYearsOld-dadYearsOld