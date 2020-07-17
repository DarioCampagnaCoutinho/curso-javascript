const numeros = [5, 50, 3, 7, 78, 23, 12, 1, 22, 3, 4, 5, 6, 7, 8, 14, 34, 45, 46];

const total = numeros.reduce(function (acumulador, valor, indice) {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);