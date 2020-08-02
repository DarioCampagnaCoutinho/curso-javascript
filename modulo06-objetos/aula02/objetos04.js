const produto = { nome: 'Caneca', preco: .8 };

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}