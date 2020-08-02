function Pessoas(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this);
}

const p1 = new Pessoas('Dario', 'Campagna');
Object.freeze(p1);
const p2 = new Pessoas('Joana', 'Dark');

console.log(p1);