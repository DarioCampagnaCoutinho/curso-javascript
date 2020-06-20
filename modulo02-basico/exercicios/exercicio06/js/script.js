let numero = Number(prompt('Digite um NÚMERO:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu número é ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz Quadrada é ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro? ${Number.isInteger(numero)}</p>`;