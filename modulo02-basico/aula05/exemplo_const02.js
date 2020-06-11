const nome = 'Dario';
const sobreNome = 'Campagna';
const idade = 35;
const peso = 89;
const alturaEmMetros = 1.78;
const imc = peso / (alturaEmMetros * alturaEmMetros);
const anoNascimento = 2020 - 35;

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg .');
console.log('Tem altura de :', alturaEmMetros, 'e seu IMC é = ', imc, '.');
console.log(nome, 'nasceu no ano de', anoNascimento, '.');

//Templates de strings, forma moderna
console.log(`${nome} nasceu no ano de ${anoNascimento}`)