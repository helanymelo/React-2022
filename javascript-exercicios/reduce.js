//filter - retorna true e false = deve-se fazer uma comparacao e map não


// const products = [
//     {name: 'Maquina de lavar', size: 'medium', price:5000},
//     {name: 'Notebook', size: 'small', price:6000},
//     {name: 'Smartphone', size: 'small', price:5000},
//     {name: 'TV Samsung', size: 'medium', price:6000},
// ]

// const prod = products.map((prod)=>{
//     return prod.size
// })
// console.log(prod)



// const prices = products.reduce((acc, total)=>{
//     return acc + total.price
// }, 0)

// console.log(prices)

// const names = products.map((item)=>{
//     return item.name
// })
// console.log(names)

// const names2 = products.filter((item)=>{
//     return item.size === 'small'
// })
// console.log(names2)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalOfWishList = wishlist.reduce((acc, total) =>{
//     return  acc  + total.price
// }, 0)

// console.log(totalOfWishList)


// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];


// const input = [ 1, -4, 12, 0, -3, 29, -150]

// const positiveNumbers = input.map((numbers)=>{
//     return numbers
// }).filter((numbers)=>{
//     return numbers > 0
// }).reduce((acc, total)=> acc + total, 0)

// console.log(positiveNumbers)


const initial = 'George Raymond Richard Martin';

const newInitial = initial.split("").map(name => name[0]).join('')

console.log(newInitial)

const input = 'George Raymond Richard Martin';

input
.split(' ')
.map(function(word) {
  return word[0];
})
.join('');

// or written with Arrow function 
input.split(' ').map(word => word[0]).join('');
console.log(input)



