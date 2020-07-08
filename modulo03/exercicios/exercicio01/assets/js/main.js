function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function () {
    relogio.classList.remove('pausar');
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', function () {
    clearInterval(timer);
    relogio.classList.add('pausar');
});

zerar.addEventListener('click', function () {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});