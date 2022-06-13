function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const months = {
    January : 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  }
  const currDate = currentDate.split(' ')
  const currMonth = months[currDate[0]]
  const currDay = Number(currDate[1].slice(0, -1))
  const currYear = Number(currDate[2])
  const currNum = currDay + currMonth + currYear
  const exprDate = expirationDate.split(' ')
  const exprMonth = months[exprDate[0]]
  const exprDay = Number(exprDate[1].slice(0, -1))
  const exprYear = Number(exprDate[2])
  const exprNum = exprMonth + exprDay + exprYear
  console.log(currNum)
  console.log(exprNum)
}

checkCoupon('123','123','September 5, 2014','October 1, 2014')

//define an object to convert month to numerical value

//define a variable to hold month

//define a variale to hold day

//define a variable to hold year