

function message(something){
    console.log(something)
}
message('Hello, World')

//for of 
function totalSum(numbers){
    let total = 0

    for(let num of numbers){
        total = total + num
    }
    return total

}

const myArray = [1, 2, 3, 4, 5]
const result = totalSum(myArray)
console.log(result)


function sumNumbers(numbers){
    let total = 0
    for(let num of numbers){
        total = total + num
    }
    return total
}

const myArrayOfNumbers = [5 , 10 , 30 , 5]
const finalResult  = sumNumbers(myArrayOfNumbers)
console.log(finalResult)

const finalArray = myArrayOfNumbers.reduce((acc, total)=>{
    return acc + total
})
console.log(finalArray)