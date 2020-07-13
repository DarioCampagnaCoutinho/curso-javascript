function funcao() {
    let total = 0;
    for (let i of arguments) {
        total += i;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);