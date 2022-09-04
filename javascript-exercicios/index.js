const users = [
    { name: 'John', city: 'London', born: '2001-04-01' },
    { name: 'Lenny', city: 'New York', born: '1997-12-11' },
    { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
    { name: 'Peter', city: 'Prague', born: '1936-03-24' },
    { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
    { name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
    { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
    { name: 'Robert', city: 'Bratislava', born: '1935-05-15' },
    { name: 'Robert', city: 'Prague', born: '1998-03-14' }
  ];

  const showUsers = users.map((item)=> `Olá ${item.name}, você mora em ${item.city} e nasceu em ${item.born}`)
  console.log(showUsers)
  
  let res = users.filter(user => user.city === 'Bratislava' && user.name === 'John');
  console.log(res);

//   const results = users.filter(user => user.name.toLowerCase().startsWith('r'))
//   console.log(results)

  // const qtyNames = users.reduce((acc, {name})=> `${acc} ${name}\n`, '')  
  // //accumalator, array 
  // console.log(qtyNames)


//   const clients = [
//     { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
//     { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
//     { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
//     { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, debitos: [] }
//  ]


//  const clientsInDebt = clients.filter((item)=>{
//     const debts = item.debitos
//     const sum = debts.reduce((acc, total)=> acc + total, 0)
//     const saldo = item.saldoTotal - sum    
//     if(saldo > 0){
//       return {
//         cliente: item.cliente
//       }
//     }
//     const clients =  `O cliente ${item.cliente} tem o saldo devedor em R$ ${saldo}`
//     console.log(clients)
    
//  })

//  //filter retorna o objeto inteiro
//  //map retorna somente uma parte espeficada

// //  const names = clients.filter((name)=>{
// //    return name.cliente
// //  })
// //  console.log(names)

//  const total = clients.map((conta)=>{
 
//   return {
//     nome: conta.cliente,
//     saldoNaConta: conta.saldoTotal,
//     saldoDevedor: conta.debitos.reduce((acc, total)=> acc + total,0),
//     saldoAposPagamento: conta.saldoTotal - conta.debitos.reduce((acc, total)=>acc + total, 0)
    
//   }
  
// })

//  console.log(total)

 






//  const mappedDebts = clients.map((item)=>{
//     const debts = item.debitos
//     let total = 0
//     for(let i in debts){
//       total +=debts[i]
//     } 
//     // console.log(total)
//     const totalDebts = [item.saldoTotal - total]
//     // console.log(totalDebts)
    
//     const peopleInDebt = totalDebts.filter(d => d < 0 )
//     console.log(peopleInDebt)
        
//     })

    


    

    



 
 


 
