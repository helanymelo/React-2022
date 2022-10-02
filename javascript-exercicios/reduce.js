animais = [
    {
      nome: 'Fumaça',
      idade: 3,
      tipo: 'cao'
    },
    {
      nome: 'Tobby',
      idade: 6,
      tipo: 'cao'
    },
    {
      nome: 'Laminha',
      idade: 1,
      tipo: 'gato'
    },
    {
      nome: 'Nutella',
      idade: 3,
      tipo: 'cao'
    },
    ];

const totalIdadeGatos = animais.filter((item)=>{
     return item.idade >= 1
}).reduce((acc, total)=>{
    return acc + total.idade
}, 0)




console.log("A soma da idade dos gatos é:", totalIdadeGatos + " anos")


function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
//   console.log(countWords('One two three'));
//   console.log(countWords('This   is   a long string'));


  function countWords(str){
    const arr = str.split("")
    return arr.length
  }

  console.log(countWords("fabio"))

  

