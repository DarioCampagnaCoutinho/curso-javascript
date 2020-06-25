//Capturar evento de submit do formulário
const form = document.querySelector('#form');

//Evento de botão, submit
form.addEventListener('submit', function (event) {
    //Não faz o envio automaticamente do formulário, evento de submit.
    event.preventDefault();
    //Entrada de dados
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    //Converter para número
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Verifica se é um número
    if (!peso) {
        setResultado('Peso Inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida!', false);
        return;
    }

    //Chamada de funções
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);

    console.log(imc, nivelImc);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarParagrafo();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}