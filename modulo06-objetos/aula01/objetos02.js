const pessoa = new Object();
pessoa.nome = 'Dario';
pessoa.sobrenome = 'Campagna';
pessoa.idade = 35;

console.log(pessoa['nome']);
const chave = 'sobrenome';
console.log(pessoa[chave]);

pessoa.falarNome = function () {
    console.log(`${this.nome}`);
};
pessoa.falarNome();

pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getDataNascimento());