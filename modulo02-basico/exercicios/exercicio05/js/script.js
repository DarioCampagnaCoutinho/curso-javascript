let numero = Number(prompt('Digite um NÚMERO:'));
const numeroTitulo = document.getElementById('numero-titulo');
const soma = document.getElementById('soma');
const raizQuadrada = document.getElementById('raiz-quadrada');

numeroTitulo.innerHTML = numero;
soma.innerHTML = `<p>Seu número é ${numero + 2}</p>`;
raizQuadrada.innerHTML = `<p>Raiz Quadrada é ${Math.sqrt(numero)}</p>`;