

const numbers = [1, 2 , 3, 4 , 6, 8]

const evenNumbers = numbers.filter((item)=>{
    return item % 3 === 0  
})

const mapNumbers = numbers.map((item)=>{
    return item 
})

console.log(mapNumbers)


console.log(evenNumbers)

function oddOrEven(number){
    for(let i = 0; i<=number; i++){
        if(i % 2 === 0){
            console.log(i, "PAR")
        }else{
            console.log(i, "IMPAR")
        }
    }
}
// oddOrEven(5)

const num1 = [1, 2 , 3]
const num2 = [4, 5, 6]
const num3  = [...num1, ...num2]
const result = num3
console.log(result)


