function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: false, // configurável
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor != 'number') {
                console.log('Bad Value!!');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 30.78, 8);
p1.estoque = 20;
console.log(p1);