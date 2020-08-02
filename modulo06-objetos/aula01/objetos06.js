function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: function () {
            return estoque;
        }, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: false // configurável
        },
        preco: {
            enumerable: true, //mostra chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: false // configurável

        }
    });
}

const p1 = new Produto('Camiseta', 30.78, 8);
p1.estoque = 20;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}