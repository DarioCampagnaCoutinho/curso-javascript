let a;
let resultado;

a = true;

resultado = !a;
console.log(resultado); // Imprime false

resultado = true && true;
console.log(resultado); // Imprime true

resultado = true && false;
console.log(resultado); // Imprime false

resultado = true || false;
console.log(resultado); // Imprime true

resultado = 5 == 5;
console.log(resultado); // Imprime true

resultado = 5 == 6;
console.log(resultado); // Imprime false

resultado = 5 < 6;
console.log(resultado); // Imprime true

resultado = 3 == "3";
console.log(resultado); // Imprime true

resultado = 3 === "3";
console.log(resultado); // Imprime false

resultado = 3 === 3;
console.log(resultado); // Imprime true