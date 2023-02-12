let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

const filterCities = cities.filter((city)=>{
    return city.name // filtra todas as cidades
}).map((city)=>{ // passa por todas as infos, mas retorna apenas os nomes
    return city.name
})



// console.log(filterCities)

const excludeLA = cities.filter((city)=>{
    return city.name !== 'Los Angeles'
}).map((city)=>{
    return city.name
}).sort()

// console.log(excludeLA)


const pessoas = [
    {
      nome: "João",
      idade: 50,
    },
    {
      nome: "Andrea",
      idade: 10,
    },
    {
      nome: "Marcos",
      idade: 70,
    },
    // {
    //   nome: "Geovana",
    //   idade: 65,
    // },
    // {
    //   nome: "Everton",
    //   idade: 36,
    // },
    // {
    //   nome: "Roberta",
    //   idade: 47,
    // },
    // {
    //   nome: "André",
    //   idade: 9,
    // },
    // {
    //   nome: "Raquel",
    //   idade: 12,
    // },
    // {
    //   nome: "Valdir",
    //   idade: 15,
    // },
    // {
    //   nome: "Helena",
    //   idade: 14,
    // },
  ]

  const maiores18 =  pessoas.filter((pessoa)=>{
    return pessoa.idade > 18
  })

  const menores18 = pessoas.filter((pessoa)=>{
    return pessoa.idade < 18
  })

//   console.log("Maiores: ", maiores18)
//   console.log('Menores ', menores18)

  const nomesComA = pessoas.filter((pessoa)=>{
    return pessoa.nome.toLowerCase().startsWith('a')
  })
//   console.log(nomesComA)


const somaDasIdades = pessoas.reduce((total, item)=>{
        return total + item.idade

},0)

console.log(somaDasIdades)
