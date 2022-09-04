const clients = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
     ]

const debts = clients.map((item)=>{
    return{
        name: item.cliente,
        saldo: item.saldoTotal,
        debitos: item.debitos.reduce((acc, total) => acc + total, 0),
        extrato: item.saldoTotal - item.debitos.reduce((acc, total)=> acc + total, 0)
    }
}).filter((clientes)=>{
    return clientes.extrato < 0
})

console.log(debts)