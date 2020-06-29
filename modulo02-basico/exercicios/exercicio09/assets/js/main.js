const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {

    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira'
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado'
            return diaSemanaTexto;

        default:
            break;
    }
}

function getMesTexto(numeroMes) {

    let nomeMesTexto;

    switch (numeroMes) {
        case 0:
            nomeMesTexto = 'janeiro'
            return nomeMesTexto;
        case 1:
            nomeMesTexto = 'fevereiro'
            return nomeMesTexto;
        case 2:
            nomeMesTexto = 'março'
            return nomeMesTexto;
        case 3:
            nomeMesTexto = 'abril'
            return nomeMesTexto;
        case 4:
            nomeMesTexto = 'maio'
            return nomeMesTexto;

        case 5:
            nomeMesTexto = 'junho'
            return nomeMesTexto;
        case 6:
            nomeMesTexto = 'julho'
            return nomeMesTexto;
        case 7:
            nomeMesTexto = 'agosto'
            return nomeMesTexto;
        case 8:
            nomeMesTexto = 'setembro'
            return nomeMesTexto;
        case 9:
            nomeMesTexto = 'outubro'
            return nomeMesTexto;
        case 10:
            nomeMesTexto = 'novembro'
            return nomeMesTexto;
        case 11:
            nomeMesTexto = 'dezembro'
            return nomeMesTexto;

        default:
            break;
    }

}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );

}

h1.innerHTML = criaData(data);
