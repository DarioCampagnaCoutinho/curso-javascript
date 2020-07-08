function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try {
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    console.log('Erro');
} finally {
    console.log('Tenha um bom dia');
}