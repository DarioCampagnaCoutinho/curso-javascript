const produto = { nome: 'Caneca', preco: .8 };
Object.defineProperty(produto, 'nome', {
    writable: true,
    configurable: false
});
produto.nome = "Pano de chão"
console.log(produto);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));