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

const pessoasNomesGrandes = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasNomesGrandes);

const pessoasMaiorDeCinquenta = pessoas.filter((obj) => obj.idade >= 50);
console.log(pessoasMaiorDeCinquenta);

const pessoasNomeTerminaComO = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('o');
});
console.log(pessoasNomeTerminaComO);