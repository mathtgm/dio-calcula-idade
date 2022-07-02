const PESSOA1 = {
    nome : 'Matheus',
    idade : 24
}

const PESSOA2 = {
    nome : 'Maria',
    idade : 26
}

function calculaIdade(anos) {
    return `Daqui á ${anos} anos, ${this.nome} tera ${anos + this.idade} anos de idade.`;
}

console.log(calculaIdade.call(PESSOA1, 10));