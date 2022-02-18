// Carne - 400gr por pessoa  + de 6 horas - 650gr
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por Pessoa + 6 horas 1500ml

// crianças valem por 0,5

//kg carne
// adultos * 0.4 + crianças * 0.4 / 2
//kg carne + 6 hrs
// adultos * 0.65 + crianças * 0.65 / 2
//latas cerveja
// Math.ceil (adultos * 1200 / 350)
// latas cerveja + 6hrs
// Math.ceil(adultos * 2000 / 350)
// Litros refrigerante/ agua
// (adultos * 1000 + crianças * 1000 / 2)/ 1000 
const itensAdulto = {
    carne: {
        maisSeisHoras: 0.65,
        menosSeisHoras: 0.4
    },
    cerveja: {
        maisSeisHoras: 2300,
        menosSeisHoras: 1500
    },
    refrigerante: {
        maisSeisHoras: 1500,
        menosSeisHoras: 1000
    },
}
const itensCrianca = {
    carne: {
        maisSeisHoras: 0.325,
        menosSeisHoras: 0.2
    },
    refrigerante: {
        maisSeisHoras: 750,
        menosSeisHoras: 500
    },
}

const elements = {
    description: document.querySelector('.group-results h2'),
    resultCarne: document.getElementById("carne"),
    resultCerveja: document.getElementById("cerveja"),
    resultRefrigerante: document.getElementById("refrigerante"),
}

const somar = (a, b) => (a + b).toFixed(2)

function carnePorQtdPessoas(qtdPessoas, percentual) {
    return qtdPessoas * percentual;
}

function calcKgCarne(pessoa, horas, itens) {
    const qtdCarne = horas >= 6
        ? itens.carne.maisSeisHoras
        : itens.carne.menosSeisHoras

    return carnePorQtdPessoas(pessoa, qtdCarne)
}


function calculaQtdCerveja(pessoas, mlCerveja) {
    return Math.ceil(pessoas * mlCerveja / 355)
}

function latasCerveja(adultos, horas) {
    const { cerveja } = itensAdulto

    const mlCerveja = horas >= 6
        ? cerveja.maisSeisHoras
        : cerveja.menosSeisHoras

    return calculaQtdCerveja(adultos, mlCerveja)
}

function calcRefrigerante(pessoa, mlRefrigerante) {
    return Math.ceil((pessoa * mlRefrigerante) / 2000)
}

function qtdeRefrigerante(pessoa, horas, itens) {
    const mlRefrigerante = horas >= 6
        ? itens.refrigerante.maisSeisHoras
        : itens.refrigerante.menosSeisHoras

    return calcRefrigerante(pessoa, mlRefrigerante)
}




function exibeNoDocument(carne, cerveja, refrigerante) {

    const { description, resultCarne, resultCerveja, resultRefrigerante } = elements

    description.innerHTML = `Para o seu churrasco recomendamos`
    resultCarne.innerHTML = `<img src="./assets/img/meat.png"> <span>${carne} Kg</span> de carne`
    resultCerveja.innerHTML = `<img src="./assets/img/beer.png"> <span>${cerveja} Latas</span> de cerveja`
    resultRefrigerante.innerHTML = `<img src="./assets/img/cola.png"> <span>${refrigerante} L de</span> refrigerante`

}

function getValueInput(id) {
    return document.getElementById(id).value
}

function calcTotal() {
    const adultos = getValueInput("adultos");
    const criancas = getValueInput("criancas");
    const horas = getValueInput("horas");


    const kgCarneAdultos = calcKgCarne(adultos, horas, itensAdulto)
    const kgCarneCrianca = calcKgCarne(criancas, horas, itensCrianca)

    const mlRefrigeranteAdulto = qtdeRefrigerante(adultos, horas, itensAdulto)
    const mlRefrigeranteCrianca = qtdeRefrigerante(criancas, horas, itensCrianca)

    const totalCerveja = latasCerveja(adultos, horas)

    const totalCarne = somar(kgCarneCrianca, kgCarneAdultos)
    const totalRefrigerante = somar(mlRefrigeranteAdulto, mlRefrigeranteCrianca)

    return [totalCarne, totalRefrigerante, totalCerveja]

}

function exibir() {

    const [carne, refrigerante, cerveja] = calcTotal()

    exibeNoDocument(carne, cerveja, refrigerante);

}
