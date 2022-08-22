const names = ['Bruno', 'Adriana', 'Breno', 'Carolina', 'Ana']

const namesByOrder = names.sort((a, b)=>{
    if(a < b){
        return -1
    }else if(a > b){
        return 1
    }else{
        return 0
    }
})

// console.log(namesByOrder)


//desustruração

const [a, b, c] = [1, 2 , 3];

// console.log(a, b, c)

const numbers = [ 1, 2, 3, 4, 5]
console.log('O nome mostrado é', numbers[0])

const arrayNumbers = [
    [1, 2 , 3],
    [4, 5,  6],
    [7, 8,  9]

]

console.log(arrayNumbers[2][2])