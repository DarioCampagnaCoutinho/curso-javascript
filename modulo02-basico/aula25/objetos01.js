const pessoa = {
    nome: 'Dario',
    sobreNome: 'Campagna',
    enderecos: {
        rua: 'Rua x',
        numero: 123
    }
}

console.log(pessoa);

//Atribuicao via desestruturação
//const { nome, sobreNome } = pessoa;
//console.log(nome, sobreNome);

//const { enderecos: { rua, numero } } = pessoa;
//console.log(rua, numero);

const { nome, ...resto } = pessoa;
console.log(nome, resto);
