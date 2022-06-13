function calculator(a,b,sign){
    if(!isNaN(Number(a)) && !isNaN(Number(b))){
        if(sign === '+'){
            return a + b
        }
        else if(sign === '-'){
            return a - b
        }
        else if(sign === '*'){
            return a * b
        }
        else if(sign === '/'){
            return a / b
        }
    }
    return 'unknown value'
}

console.log(calculator(2,'l','+'))