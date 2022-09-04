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

  //retorna um novo array map
  const cities = users.map((item)=>{
    return item.city
  })
  console.log(cities)

  const citiesF = users.filter((item)=>{
    return item.city === 'Bratislava'
  })
  console.log(citiesF)

  const usersNames = users.map((item)=>{
    return item.name
  })
  console.log(usersNames)


  const employees = [{    name: 'Luke',    department: 'Financeiro',    salary: 1500  }, 
  {
    name: 'Han',
    department: 'Financeiro',
    salary: 1200
  }, {
    name: 'Ben',
    department: 'Marketing',
    salary: 2000
  }, {
    name: 'Leia',
    department: 'Marketing',
    salary: 1750
  }, {
    name: 'Rey',
    department: 'Financeiro',
    salary: 1000
  }]


  const salary = employees.map((item)=>{
        return item.salary += 10
  })
  console.log(salary)