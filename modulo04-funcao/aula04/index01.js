function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.mostraNomeCompleto = function () {
        console.log(`${this.nome} ${this.sobrenome}`);
    };
}

const p1 = new Pessoa('Dario', 'Campagna');
const p2 = new Pessoa('Catariana', 'Campagna');
p1.mostraNomeCompleto();