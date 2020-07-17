const numeros = [5, 50, 3, 7, 78, 23, 12, 1, 22, 3, 4, 5, 6, 7, 8, 14, 34, 45, 46];

const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;
}).map(function (valor) {
    return valor * 2;
}).reduce(function (acumulador, valor) {
    return acumulador + valor;
});

console.log(numerosPares);