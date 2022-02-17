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


function carne(adultos, crianças, horas) {
    let carneChurras = 0
    if (horas >= 6) {
        carneChurras = (adultos * 0.65 + (crianças * 0.65) / 2).toFixed(2)
    } else {
        carneChurras = (adultos * 0.5 + crianças * 0.5 / 2).toFixed(2)
    }
    return carneChurras
}

function cerveja(adultos, horas) {
    let latasDeCerveja = 0
    if (horas >= 6) {
        latasDeCerveja = Math.ceil(adultos * 2300 / 355)
    } else {
        latasDeCerveja = Math.ceil(adultos * 1500 / 355)
    }
    return latasDeCerveja
}

function refrigerante(adultos, crianças, horas) {
    let litrosRefrigerante = 0
    if(horas >= 6) {
        litrosRefrigerante = Math.ceil((adultos * 1500 + crianças * 1500 / 2) / 2000)
    }else {
        litrosRefrigerante = Math.ceil((adultos * 1500 + crianças * 1000 / 2) / 2000)
    }
    return litrosRefrigerante
}
function calcular(){
    let inputAdultos = document.getElementById("adultos").value
    let inputCriancas = document.getElementById("crianças").value
    let inputHoras = document.getElementById("horas").value
    
    let description = document.querySelector('.group-results h2')
    let resultCarne = document.getElementById("carne")
    let resultCerveja = document.getElementById("cerveja")
    let resultRefrigerante = document.getElementById("refrigerante")

    description.innerHTML = `Para o seu churrasco recomendamos`
    resultCarne.innerHTML = `<img src="./assets/img/meat.png"> <span>${carne(inputAdultos, inputCriancas, inputHoras)} Kg</span> de carne`
    resultCerveja.innerHTML = `<img src="./assets/img/beer.png"> <span>${cerveja(inputAdultos, inputHoras)} Latas</span> de cerveja`
    resultRefrigerante.innerHTML = `<img src="./assets/img/cola.png"> <span>${refrigerante(inputAdultos, inputCriancas, inputHoras)} L de</span> refrigerante`
}
