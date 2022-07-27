function returnCentury (year) {
    if(year <= 100){
        return Math.ceil(year / 100)
    }
    else if(year % 100 === 0){
            return year / 100
    }
    else{
        return Math.floor(year / 100 + 1)
    }
}

console.log(returnCentury(1701))