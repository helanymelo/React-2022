


function capitalize (str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

console.log(capitalize('Hello, world!!!'))
console.log(capitalize('Helany Melo'))


function capitalizeNames(str){
    return str.split(" ").map((word)=>{
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ")
}

console.log(capitalizeNames('Helany melo'))
console.log(capitalizeNames('Fabio brasil'))
console.log(capitalizeNames('matheus brasil'))
console.log(capitalizeNames('mariana brasil'))