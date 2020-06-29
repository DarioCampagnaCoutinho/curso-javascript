const numeros = [10, 20, 30, 40, 50, 60, 70];
const [num1, num2, ...resto] = numeros;
console.log(num1, num2);
console.log(resto);

const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco)

const arrays = [[1, 2, 3], [4, 5, 6]];
const [lista1, lista2] = arrays;
console.log(lista1)
console.log(lista2)