function hello (name){
    if(name){
        let correctedName = ''
        for (let i = 0; i < name.length; i++){
            if(i === 0){
                correctedName += name[i].toUpperCase()
            }
            else{
                correctedName += name[i].toLowerCase()
            }
        }
        return `Hello, ${correctedName}!`
    }
    return 'Hello, World!'
}

console.log(hello('john'))