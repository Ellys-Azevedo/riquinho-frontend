// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map((item) => {
//   return item * 10
// });

let familia = [
  {
    nomeCompleto: "Ellys R.F.Azevedo", 
    dataDeNascimento: "30/09/2003", 
    profissao:"", 
    estadoCivil:"Noiva"
  },
  {
    nomeCompleto: "Atania M.F.Azevedo", 
    dataDeNascimento: "30/07/1975", 
    profissao: "Cabelereira", 
    estadoCivil:"Casada"
  },
  {
    nomeCompleto: "Lameque F.Azevedo", 
    dataDeNascimento: "22/05/2000", 
    profissao:"programador", 
    estadoCivil:"Casado" 
  },
  {
    nomeCompleto: "Ronaldo de Azevedo", 
    dataDeNascimento: "25/10/1968", 
    profissao:"Supervisor", 
    estadoCivil:"Casado" 
  },
]

const nomesFamilia = familia.map((pessoa) => {
  return pessoa
})

console.log(nomesFamilia)
