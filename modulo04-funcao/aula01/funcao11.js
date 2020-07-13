function criarMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);

console.log(duplica(2));
console.log(triplica(2));