const alunos = ['Dario', 'Ana', 'Paula', 'Maria', 'João', 'Jones']

alunos[0] = 'José';

const removeUltimo = alunos.pop();
console.log(removeUltimo);

const removePrimeiro = alunos.shift();
console.log(removePrimeiro);

delete alunos[3];
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);

//console.log(alunos.slice(0, 3));
//console.log(alunos.slice(0, -2)); Dessa forma elimina os últimos dois elementos

alunos.push('Miguel');

alunos.unshift('Luiz');

alunos[alunos.length] = 'Luiza';

console.log(alunos);
console.log(alunos[3]);
console.log(alunos.length);