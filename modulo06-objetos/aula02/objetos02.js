const produto = { nome: 'Caneca', preco: .8 };
const outraCoisa = {
    ...produto
}

outraCoisa.nome = 'Outra';
outraCoisa.preco = 2.9;

console.log(produto);
console.log(outraCoisa);