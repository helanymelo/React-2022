const pessoas = [
	{ nome: "Marcos", salário: 3000, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 11000, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 11000, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 1000, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5000, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 6000, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 9000, setor: "marketing", presencial: true }
]

const filtrarSalario = pessoas.filter((pessoa)=>{
    return pessoa.salário !== 11000
}).map((p => p.nome))

console.log(filtrarSalario)

const mostrarPessoas = pessoas.map((pessoa)=>{
	return `${pessoa.nome} ${pessoa.salário}`
})

console.log(mostrarPessoas)

const filtrar = pessoas.filter((pessoa)=>{
    return pessoa.setor ==='marketing' && pessoa.presencial
}).map((pessoa => pessoa.nome ))

console.log(filtrar)


// const salarioTotal = pessoas.reduce((total, item)=>{
//     return total + item.salário
// },0)

// console.log(salarioTotal)

const organizePeopleByName = pessoas.sort((a, b)=>{
	if(a.nome < b.nome){
		return -1
	}else if(a.nome > b.nome){
		return 1
	}else{
		return 0
	}
})

console.log(organizePeopleByName)
