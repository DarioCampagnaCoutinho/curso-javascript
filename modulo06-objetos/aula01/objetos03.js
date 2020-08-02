function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
};

const pessoa1 = criaPessoa('Dario', 'Campagna');
console.log(pessoa1.nomeCompleto());