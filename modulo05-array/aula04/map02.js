const pessoas = [
    { nome: 'Rarior', idade: 26 },
    { nome: 'Larioqw', idade: 36 },
    { nome: 'Qari', idade: 46 },
    { nome: 'Kari', idade: 89 },
    { nome: 'Oari', idade: 12 },
    { nome: 'Sari', idade: 4 },
    { nome: 'Vari', idade: 5 },
    { nome: 'Nario', idade: 56 },
    { nome: 'Mario', idade: 16 }
]

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
    obj.id = indice;
    return obj;
});
console.log(comIds);