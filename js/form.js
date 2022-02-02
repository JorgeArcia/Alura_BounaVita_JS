document.querySelector('#adicionar-paciente').addEventListener("click", adicionar)

function adicionar() {
    var formulario = document.querySelector("#form-adicionar")

    let nombre = formulario.nombre.value
    let peso = formulario.peso.value
    let altura = formulario.altura.value
    let gordura = formulario.gordura.value

    pacienteTr = document.createElement("tr")
    nombreTd = document.createElement("td")
    pesoTd = document.createElement("td")
    alturaTd = document.createElement("td")
    gorduraTd = document.createElement("td")
    imcTd = document.createElement("td")

    nombreTd.textContent = nombre
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nombreTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    tabla = document.querySelector("#tabla-pacientes")

    tabla.appendChild(pacienteTr)

    imcTd.textContent = calcularImc(peso, altura)
    event.preventDefault()
}