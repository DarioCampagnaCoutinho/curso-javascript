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

const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);
