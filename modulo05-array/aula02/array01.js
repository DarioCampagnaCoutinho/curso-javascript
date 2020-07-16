const nomes = ['Amadeu', 'José', 'Dario', 'Joaquina', 'Lucas', 'Jorge', 'Tais',
    'Marli', 'Maria', 'René', 'Marcos', 'Juliana', 'Alfredo'];

//Removeu dois elementos a partir do indice 1, então removeu os indices 1 e 2
const removendo1 = nomes.splice(1, 2);
console.log(nomes, removendo1);

const removendoDoisUltimosElementos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removendoDoisUltimosElementos);

//Simulando o pop com splice
//const simulandoPop = nomes.splice(-1, 1);
//console.log(simulandoPop);

//Simulando o unshift com splice
//const simulandoUnshift = nomes.splice(0, 1);
//console.log(simulandoUnshift);

//Simulando o push
const simulandoPush = nomes.splice(nomes.length, 0, 'Amauri', 'Lucino');
console.log(nomes);

//Simulando o unshift
const simulandoUnshift = nomes.splice(0, 0, 'Leonardo', 'Leandro');
console.log(nomes);