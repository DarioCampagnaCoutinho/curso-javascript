
const lista = [
    {
        nome: 'Dario',
        idade: 55
    },
    {
        nome: 'Maria',
        idade: 89
    },
    {
        nome: 'Mario',
        idade: 90
    },
    {
        nome: 'Ana',
        idade: 120
    }

]

console.log(lista)

const converterObjeto1 = (objeto) => {
    return objeto.idade
}

const converterObjeto02 = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

const converterObjeto3 = (objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map((objeto)=> objeto.idade))

console.log(lista.map(converterObjeto1))

console.log(lista.map(converterObjeto02))

console.log(lista.map(converterObjeto3))