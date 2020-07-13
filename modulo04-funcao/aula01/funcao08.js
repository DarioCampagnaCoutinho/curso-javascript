function funcao(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

funcao('+', 10, 20, 30, 40, 50);
funcao('-', 180, 20, 30, 40, 50);
funcao('*', 10, 20, 30, 40, 50);
funcao('/', 10, 20, 30, 40, 50);