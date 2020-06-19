let num1 = 123;
let num2 = 12.985677;

//Conversão de base numérica
console.log(num1.toString());
console.log(num1.toString(2));
console.log(num1.toString(8));
console.log(num1.toString(16));

console.log(num2.toFixed(2));

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

let temp = num1 * "Ola";
console.log(Number.isNaN(temp));