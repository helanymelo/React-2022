//desafio 1

// function mathOperation(a, b, c, d, e,f){
//     const sum = a + b
//     const sub = sum - c
//     const mult = sub * d
//     const div = mult / e
//     const exp = div ** f

//     return exp

// }
// console.log(mathOperation(6, 5, 4, 3, 2, 1))

// //desafio 4

// function showText(text, flag ='start'){
//     if(text.length < 3){
//         return text
//     }else if(flag === 'start'){
//         return text.slice(0, 3)
//     }
//     return text.slice(text.length - 3) // -3
// }

// console.log(showText('Helany', 'start'))
// console.log(showText('Helany', 'end'))
// console.log(showText('Helany'))

// //slice - (2) = vai fatear a partir do zero

// const fruits = ['abacaxi', 'limão', 'laranja', 'pera', 'morango', 'uva']
// const result = fruits.slice(2)



const nameUser = 'Helany'
const nameSplit = nameUser.split('')
console.log(nameSplit)
