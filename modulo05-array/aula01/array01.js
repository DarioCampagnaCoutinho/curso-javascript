//const nomes = new Array('Dario', 'Joaquina', 'Lucas');

const nomes = ['Dario', 'Joaquina', 'Lucas', 'Marli', 'Maria'];
const novo1 = nomes;
const novo2 = [...nomes]

novo1.pop();//Altera apenas nome e novo1

console.log(nomes);
console.log(novo1);
console.log(novo2);