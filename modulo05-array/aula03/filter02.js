const numeros = [5, 50, 3, 7, 78, 23, 12, 1, 22, 3, 4, 5, 6, 7, 8, 14, 34, 45, 46];

const numerosFiltrados = numeros.filter(function (valor) {
    return valor > 10;
}
);
console.log(numerosFiltrados);