const fruits = ['banana', 'pera', 'goiaba', 'maçã']

const [, p, g] = fruits
console.log(p, g)

const person = {
    name: 'Helany',
    email: 'helany@labenu.com.br',
    age: 21,
    college: true
}

const person2 = {
    name: 'Fabio',
    email: 'fabio@labenu.com.br',
    age: 21,
    college: false
}

function getBirthYear(age){
    const year = new Date().getFullYear()
    const birthYear = year - age
    return birthYear
}

console.log(getBirthYear(1984))

function showInfo(){
    const birthYear = getBirthYear(person.age)
    console.log(birthYear)
}


