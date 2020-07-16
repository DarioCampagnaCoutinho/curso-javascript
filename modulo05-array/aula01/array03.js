const nomes = ['Amadeu', 'José', 'Dario', 'Joaquina', 'Lucas', 'Marli', 'Maria'];

const removendoDoisUltimosElementos = nomes.slice(0, -2);
console.log(removendoDoisUltimosElementos);

const fatiamento = nomes.slice(2, 5);
console.log(fatiamento);

const nome = 'Dario Campagna Coutinho';
const stringParaArray = nome.split(' ');
console.log(stringParaArray);