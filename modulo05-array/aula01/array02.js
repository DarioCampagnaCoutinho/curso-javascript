const nomes = ['Amadeu', 'José', 'Dario', 'Joaquina', 'Lucas', 'Marli', 'Maria'];

const removidoUltimo = nomes.pop();
console.log(removidoUltimo);

const removidoPrimeiro = nomes.shift();
console.log(removidoPrimeiro);


nomes.push('Lúcia');
nomes.push('Lucimara');
nomes.push('Lidiane');
nomes.push('Luciana');

nomes.unshift('Tereza');
nomes.unshift('Marcos');

console.log(nomes);
console.log(nomes.length);

