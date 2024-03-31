const lista = [
    {
        nome: 'Dario',
        idade: 55
    },
    {
        nome: 'Maria',
        idade: 89
    },
    {
        nome: 'Mario',
        idade: 90
    },
    {
        nome: 'Ana',
        idade: 120
    }

]

for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

lista.forEach((objeto)=> console.log(objeto));

let soma1 = 0;

//Função Anônima
lista.forEach((objeto) => {
    soma1 += objeto.idade
});

console.log('Soma:', soma1);

let soma2 = 0;
const somaIdade = (objeto)=> {
    soma2 += objeto.idade
}
lista.forEach(somaIdade);
console.log(soma2)